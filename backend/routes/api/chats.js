/**
 * @file   chats.js
 * @path /routes/api/chats.js
 * @author: Md Ariful Islam
 */
const express = require("express");
const { create } = require("../../models/chat");
const chat = require("../../models/chat");
const router = express.Router();
const Chat = require("../../models/chat");
const ChatDetail = require("../../models/chatDetail");
const http = require("http").Server(express);
const io = require("socket.io")(http);

// get list of all chat room list
/**
 * @route   GET api/chats/list
 * @desc    Get all chatrooms list
 */
router.get("/list", (req, res, next) => {
  Chat.find()
    .sort({ date: -1 })
    .then((chats) => res.json(chats));
});

/**
 * @route   POST api/chats/create
 * @desc    Create a new chat room
 * @param   {String} roomTitle
 * @param   {String} createdBy
 */
router.post("/create", (req, res) => {
  const { roomTitle, createdBy } = req.body;
  const newChat = new Chat({
    roomTitle,
    createdBy,
    members: [createdBy],
  });

  Chat.findOne({ roomTitle }, (err, room) => {
    //        console.log('got here==>>>>>', err, 'roommmm==>>', room)
    if (err) {
      res.status(500).send(err);
    } else if (room) {
      if (room.members.includes(createdBy)) {
        res.send({ success: false, msg: "Name already exist!" });
      } else {
        Chat.updateOne(
          { roomTitle },
          { $push: { members: createdBy } },
          (err) => {
            res.send({ success: true, msg: "Member added", room });
          }
        );
      }
    } else {
      Chat.addChatRoom(newChat, (err, chat) => {
        if (err) {
          res.json({
            success: false,
            msg: "Can not create Chat room",
          });
        } else {
          res.json({
            success: true,
            msg: "Successfully created a chat room",
            room: chat,
          });
        }
      });
    }
  });
});

/**
 * @route   GET api/chats/detail/:id
 * @desc    Get Chat Details
 * @param   {String} chatId
 */
router.get("/detail/:id", (req, res, next) => {
  const chatId = req.params.id;
  Chat.findById(chatId)
    .then(function (chat) {
      if (chat) {
        const queryForMsgs = ChatDetail.find();
        queryForMsgs.where("chatId", chatId);
        queryForMsgs.populate("chatId");
        queryForMsgs.exec(function (err, result) {
          if (err) {
            res.json("No chat msgs here" + err);
          } else {
            res.json(result);
          }
        });
      }
    })
    .catch((err) => res.status(404).json({ success: false }));
});

/**
 * @route   POST api/chats/addMsg/:id
 * @desc    Add new chat msg with chatRoom Id, username, message
 * @param   {String} chatId
 */
router.post("/addMsg/:id", (req, res, next) => {
  console.log("got here add msg==>>>>", req.body);
  const chatId = req.params.id;
  const newMsg = new ChatDetail({
    chatId: chatId,
    chatMsg: req.body.chatMsg,
    msgBy: req.body.msgBy,
  });

  ChatDetail.addChatMsg(newMsg, (err, chatData) => {
    if (err) {
      res.json({
        success: false,
        msg: "No msg send",
      });
    } else {
      console.log("scooo===>>", chatData);
       // io.emit("newMsg", { chatData });
        res.send({success: true, msg: chatData})
    }
  });
});

/**
 * Delete chat msg from chat detail
 * @route   DELETE api/chats/delete/:id
 * @desc    Delete A chat message
 * @param   {String} chatMsgId
 * @return  {Boolean}
 */
router.delete("/delete/:id", (req, res) => {
  const chatMsgId = req.params.id;
  ChatDetail.findById(chatMsgId)
    .then((chat) => chat.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

/**
 * @route  POST api/chats/update/:id
 * @desc   Update chat Messages
 * @param   {String} chatMsgId
 */
router.post("update/:id", (req, res) => {
  const chatMsgId = req.params.id;
  ChatDetail.findById(chatMsgId).exec(function (err, result) {
    result.set({
      chatMsg: req.body.chatMsg,
      msgBy: req.body.msgBy,
    });
    result.save(function (err, newResult) {
      if (err) {
        console.log(err);
      } else {
        io.on("connection", function (socket) {
          console.log("Msg updates....");
          socket.on("getMsgBy", function (data) {
            console.log(data);
            socket.emit("msgData", { msgBy: data });
          });

          socket.on("msgToAll", function (data) {
            //Send message to everyone
            io.sockets.emit("newmsg", data);
          });
        });
      }
    });
  });
});

// test routes
router.get("/test", (req, res, next) => {
  res.send("This route works fine");
});

module.exports = router;
