var db = require("./db");
const express = require("express");
const router = express.Router();
// 接口查询数据库，
router.get("/userList", (req, res, next) => {
  const query = req.query;
  let queryData = "SELECT * FROM userInfo";
  db.query(queryData, [], function (results, fields) {
    res.json({ results });
  });
});

// 用户登录信息校验
router.post("/userInfo", (req, res, next) => {
    
  const query = req.body;
  let queryData = "SELECT * FROM userInfo";
  let result = {
    code: 0,
    msg: "",
  };
  
  console.log("REQ---",req.body)
  db.query(queryData, [], function (results, fields) {
    if (results) {
      let nameArray = [];
      let passArray = [];
      results.forEach((item) => {
        nameArray.push(item.name);
        passArray.push(item.password);
      });
      console.log("nameArray---",nameArray)
      console.log("passArray---",passArray)
      if (
        nameArray.includes(query.name) &&
        passArray.includes(query.password)
      ) {
        result.code = 1;
        result.msg = "登录成功";
      } else {
        result.code = 0;
        result.msg = "登录失败，请检查登录信息";
      }
    }
    res.send(result);
    // res.json({ results });
  });
});

module.exports = router;
