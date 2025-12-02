const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    // 유효한 상태인지 검증 (선택사항)
    const validStatus = ["대기중", "처리중", "완료"];
    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: "잘못된 상태 값입니다." });
    }

    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: "요청을 찾을 수 없습니다." });
    }

    res.json({ success: true, request: updatedRequest });
  } catch (error) {
    console.error("❌ 상태 변경 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
});

router.get("/", async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "서버 오류" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, phone, region, tableCount, selections, message } = req.body;

    if (!name || !phone || !region) {
      return res.status(400).json({ error: "필수값 누락" });
    }

    const request = new Request({
      name,
      phone,
      region,
      tableCount,
      selections,
      message: message || "",
    });

    await request.save();
    res.status(201).json({ success: true, request });
  } catch (error) {
    console.error("❌ Request save error:", error);
    res.status(500).json({ error: "서버 오류" });
  }
});

module.exports = router;