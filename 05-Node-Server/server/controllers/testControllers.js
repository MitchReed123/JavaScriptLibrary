var express = require("express"); //1
var router = express.Router(); //2
var sequelize = require("../db");
var TestModel = sequelize.import("../models/test");
/***************************************** 
 CONTROLLER METHOD #1: Simple Response
******************************************/
router.post("/one", function (req, res) {
  res.send("Test 1 went through!!");
});
/*****************************************
 * CONTROLLER METHOD #2: Persisting Data
 ******************************************/

router.post("/two", function (req, res) {
  let testData = "Test data for endpoint two";

  TestModel.create({
    testdata: testData,
  }).then((dataFromDatabase) => {
    res.send("Test two went through");
  });
});
/*****************************************
 * CONTROLLER METHOD #3: req.body
 ******************************************/

router.post("/three", function (req, res) {
  var testData = req.body.testdata.item;

  TestModel.create({
    testdata: testData,
  });
  res.send("Test three went through!");
  console.log("Test three went through");
});

//step 4 - use this with Postman
router.post("/four", function (req, res) {
  var testData = req.body.testdata.item;

  TestModel.create({
    testdata: testData,
  }).then(function message() {
    res.send("Test 4 went through!!");
  });
});

//Route 5: Reture data in a promise

router.post("/five", function (req, res) {
  var testData = req.body.testdata.item;

  TestModel.create({
    testdata: testData,
  }).then(function message(data) {
    res.send(data);
  });
});

//route 6: return response as JSON
router.post("/six", function (req, res) {
  var testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData,
  }).then(function message(testdata) {
    res.json({
      testdata: testdata,
    });
  });
});

//route 7: handle errors
router.post("/seven", function (req, res) {
  var testData = req.body.testdata.item;

  TestModel.create({
    testdata: testData,
  }).then(
    function createSuccess(testdata) {
      res.json({
        testdata: testdata,
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

//GET: Get simple message from server

router.get("/helloclient", function (req, res) {
  res.send("This is a messge from the server to the client");
});

//GET: /one
router.get("/one", function (req, res) {
  TestModel.findAll({
    attributes: ["id", "testdata"],
  }).then(
    function findAllSuccess(data) {
      console.log("Controller data:", data);
      res.json(data);
    },
    function findAllErrors(err) {
      res.send(500, err.message);
    }
  );
});
module.exports = router;
