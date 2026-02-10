const _0xdafb73 = _0x1355;
(function (_0x4f8949, _0x4ca18e) {
  const _0x1e1d8e = _0x1355,
    _0x41a7a3 = _0x4f8949();
  while (!![]) {
    try {
      const _0x5e23bd =
        parseInt(_0x1e1d8e(0x183)) / 0x1 +
        -parseInt(_0x1e1d8e(0x187)) / 0x2 +
        -parseInt(_0x1e1d8e(0x1ab)) / 0x3 +
        (-parseInt(_0x1e1d8e(0x1aa)) / 0x4) *
          (parseInt(_0x1e1d8e(0x1a4)) / 0x5) +
        (parseInt(_0x1e1d8e(0x186)) / 0x6) *
          (parseInt(_0x1e1d8e(0x179)) / 0x7) +
        -parseInt(_0x1e1d8e(0x198)) / 0x8 +
        (-parseInt(_0x1e1d8e(0x195)) / 0x9) *
          (-parseInt(_0x1e1d8e(0x19a)) / 0xa);
      if (_0x5e23bd === _0x4ca18e) break;
      else _0x41a7a3["push"](_0x41a7a3["shift"]());
    } catch (_0x3dabd5) {
      _0x41a7a3["push"](_0x41a7a3["shift"]());
    }
  }
})(_0x2fdb, 0x536ef);
function _0x2fdb() {
  const _0x2f8d3b = [
    "currentTime",
    "remove",
    "1363720WxECjy",
    "closeModal",
    "4966430uUDKwm",
    "deg,\x20#475569\x20",
    "System\x20Status:",
    "floor",
    "./assets/audios/mixkit-ending-show-audience-clapping-478.wav",
    "div",
    "updateWheel",
    "#f97316",
    "transform",
    "./assets/audios/dragon-studio-fireworks-07-419025.mp3",
    "27420wIGPIA",
    "luckyNumber",
    "filter",
    "disabled",
    "shiftKey",
    "opacity",
    "364qQnWTv",
    "139725JVcqtT",
    "innerText",
    "flat",
    "ctrlKey",
    "10px",
    "Activated",
    "#8b5cf6",
    "preventDefault",
    "#f59e0b",
    "getAttribute",
    "isRemoved",
    "innerHTML",
    "number",
    "transform\x20",
    "log",
    "https://lucky-wheel-469a8-default-rtdb.asia-southeast1.firebasedatabase.app/",
    "max",
    "absolute\x20inset-0\x20transition-opacity\x20duration-500\x20opacity-0",
    "text",
    "classList",
    "data-time",
    "#3b82f6",
    "val",
    "value",
    "#ec4899",
    "overlayElement",
    "add",
    "includes",
    "deg)",
    "prizeText",
    "rotate(0deg)",
    "index",
    "resultModal",
    "style",
    "deg,\x20transparent\x20",
    "createElement",
    "onkeydown",
    "values",
    "addEventListener",
    "VIP",
    "949382MPjIIz",
    "opacity-100",
    "options",
    "deg\x20",
    "#ef4444",
    "isVipMode",
    "keyCode",
    "rotate(",
    "transition",
    "play",
    "137581hKerSt",
    "length",
    "contextmenu",
    "12hrHMMg",
    "688584vVsYxW",
    "getElementById",
    "absolute\x20top-0\x20left-1/2\x20-translate-x-1/2\x20h-1/2\x20origin-bottom\x20flex\x20items-start\x20justify-center\x20pt-4\x20font-black\x20text-white\x20z-10",
    "fontSize",
    "appendChild",
    "#10b981",
    "random",
    "click",
    "spinBtn",
    "pause",
    "push",
    "hidden",
    "conic-gradient(",
    "prizeSelect",
    "18tFVEXB",
  ];
  _0x2fdb = function () {
    return _0x2f8d3b;
  };
  return _0x2fdb();
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
function _0x1355(_0x24f0d7, _0x2f81b0) {
  _0x24f0d7 = _0x24f0d7 - 0x164;
  const _0x2fdb43 = _0x2fdb();
  let _0x1355aa = _0x2fdb43[_0x24f0d7];
  return _0x1355aa;
}
const firebaseConfig = { databaseURL: _0xdafb73(0x1ba) },
  app = initializeApp(firebaseConfig),
  db = getDatabase(app);
let remoteVipSignal = ![];
onValue(ref(db, _0xdafb73(0x17e)), (_0x5d0fd5) => {
  const _0x170287 = _0xdafb73;
  (remoteVipSignal = _0x5d0fd5[_0x170287(0x167)]()),
    console["log"](
      _0x170287(0x19c),
      remoteVipSignal ? _0x170287(0x178) : "Normal"
    );
}),
  document["addEventListener"](_0xdafb73(0x185), (_0x4f213e) =>
    _0x4f213e[_0xdafb73(0x1b2)]()
  ),
  (document[_0xdafb73(0x175)] = function (_0x754ef5) {
    const _0x589bae = _0xdafb73;
    if (
      _0x754ef5[_0x589bae(0x17f)] == 0x7b ||
      (_0x754ef5[_0x589bae(0x1ae)] &&
        _0x754ef5[_0x589bae(0x1a8)] &&
        (_0x754ef5[_0x589bae(0x17f)] == 0x49 ||
          _0x754ef5["keyCode"] == 0x4a ||
          _0x754ef5[_0x589bae(0x17f)] == 0x43)) ||
      (_0x754ef5[_0x589bae(0x1ae)] && _0x754ef5["keyCode"] == 0x55)
    )
      return ![];
  });
const wheel = document[_0xdafb73(0x188)]("wheel"),
  slotInput = document[_0xdafb73(0x188)]("slotInput"),
  updateBtn = document["getElementById"](_0xdafb73(0x1a0)),
  spinBtn = document[_0xdafb73(0x188)](_0xdafb73(0x18f)),
  prizeSelect = document[_0xdafb73(0x188)](_0xdafb73(0x194)),
  resultModal = document["getElementById"](_0xdafb73(0x171)),
  luckyNumberDisplay = document[_0xdafb73(0x188)](_0xdafb73(0x1a5)),
  prizeTextDisplay = document[_0xdafb73(0x188)](_0xdafb73(0x16e)),
  fireworkSound = new Audio(_0xdafb73(0x1a3)),
  cheerSound = new Audio(_0xdafb73(0x19e)),
  spinSound = new Audio("./assets/audios/xsmb.mp3");
spinSound["loop"] = !![];
const riggedPrizes = {
  nhat: [0x30],
  nhi: [0x21, 0x7, 0x1a],
  ba: [0xa, 0x2d, 0x37, 0x15],
  khuyenkhich: [0x17, 0x6, 0xe, 0x12, 0x1c, 0x22, 0x26, 0x2a, 0x2e, 0x35],
};
let currentRotation = 0x0,
  isSpinning = ![],
  segments = [],
  isModalOpen = ![];
const colors = [
  _0xdafb73(0x17d),
  _0xdafb73(0x166),
  _0xdafb73(0x18c),
  _0xdafb73(0x1b3),
  _0xdafb73(0x1b1),
  _0xdafb73(0x169),
  "#06b6d4",
  _0xdafb73(0x1a1),
];
function triggerContinuousFirework() {
  const _0x5f26ea = _0xdafb73;
  if (!isModalOpen) return;
  confetti({
    particleCount: 0x28,
    spread: 0x168,
    origin: {
      x: Math[_0x5f26ea(0x18d)]() * 0.3 + 0.1,
      y: Math[_0x5f26ea(0x18d)]() - 0.2,
    },
  }),
    confetti({
      particleCount: 0x28,
      spread: 0x168,
      origin: {
        x: Math[_0x5f26ea(0x18d)]() * 0.3 + 0.6,
        y: Math[_0x5f26ea(0x18d)]() - 0.2,
      },
    }),
    setTimeout(triggerContinuousFirework, 0x1f4);
}
function createWheel() {
  const _0x174363 = _0xdafb73,
    _0x325040 = Math["min"](
      Math[_0x174363(0x1bb)](parseInt(slotInput[_0x174363(0x168)]) || 0xa, 0x1),
      0x46
    );
  (wheel[_0x174363(0x1b6)] = ""),
    (wheel["style"][_0x174363(0x1a2)] = _0x174363(0x16f)),
    (currentRotation = 0x0),
    (segments = []);
  const _0x290b0b = 0x168 / _0x325040;
  let _0x250f81 = [];
  for (let _0x1480eb = 0x0; _0x1480eb < _0x325040; _0x1480eb++) {
    const _0x22249a = colors[_0x1480eb % colors[_0x174363(0x184)]];
    _0x250f81[_0x174363(0x191)](
      _0x22249a +
        "\x20" +
        _0x1480eb * _0x290b0b +
        _0x174363(0x17c) +
        (_0x1480eb + 0x1) * _0x290b0b +
        "deg"
    );
    const _0x58d2b5 = document["createElement"](_0x174363(0x19f));
    (_0x58d2b5["className"] = _0x174363(0x1bc)),
      (_0x58d2b5[_0x174363(0x172)]["background"] =
        "conic-gradient(transparent\x20" +
        _0x1480eb * _0x290b0b +
        _0x174363(0x19b) +
        _0x1480eb * _0x290b0b +
        "deg,\x20#475569\x20" +
        (_0x1480eb + 0x1) * _0x290b0b +
        _0x174363(0x173) +
        (_0x1480eb + 0x1) * _0x290b0b +
        _0x174363(0x16d)),
      wheel[_0x174363(0x18b)](_0x58d2b5);
    const _0xcb9fc4 = document[_0x174363(0x174)]("div");
    (_0xcb9fc4["className"] = _0x174363(0x189)),
      (_0xcb9fc4[_0x174363(0x172)][_0x174363(0x18a)] =
        _0x325040 > 0x28
          ? _0x174363(0x1af)
          : _0x325040 > 0x14
          ? "14px"
          : "20px"),
      (_0xcb9fc4["style"][_0x174363(0x1a2)] =
        "translateX(-50%)\x20rotate(" +
        (_0x1480eb * _0x290b0b + _0x290b0b / 0x2) +
        _0x174363(0x16d)),
      (_0xcb9fc4[_0x174363(0x1ac)] = _0x1480eb + 0x1),
      wheel[_0x174363(0x18b)](_0xcb9fc4),
      segments[_0x174363(0x191)]({
        index: _0x1480eb,
        number: _0x1480eb + 0x1,
        labelElement: _0xcb9fc4,
        overlayElement: _0x58d2b5,
        isRemoved: ![],
      });
  }
  wheel[_0x174363(0x172)]["background"] =
    _0x174363(0x193) + _0x250f81["join"](",\x20") + ")";
}
function spin() {
  const _0x4c245b = _0xdafb73,
    _0x5b5069 = segments["filter"]((_0x3eaaa4) => !_0x3eaaa4[_0x4c245b(0x1b5)]);
  if (isSpinning || _0x5b5069[_0x4c245b(0x184)] === 0x0) return;
  const _0xd50382 = prizeSelect[_0x4c245b(0x17b)][prizeSelect["selectedIndex"]],
    _0x49ae10 = _0xd50382[_0x4c245b(0x168)],
    _0x268a89 = parseInt(_0xd50382[_0x4c245b(0x1b4)](_0x4c245b(0x165))),
    _0x69b17e = _0xd50382[_0x4c245b(0x1bd)]["split"]("(")[0x0];
  (isSpinning = !![]),
    (spinBtn["disabled"] = !![]),
    (spinSound[_0x4c245b(0x196)] = 0x0),
    spinSound["play"]();
  let _0x4750d3;
  const _0x5223a6 = parseInt(slotInput[_0x4c245b(0x168)]) >= 0x32,
    _0x2f253e = Object[_0x4c245b(0x176)](riggedPrizes)[_0x4c245b(0x1ad)](),
    _0x47043c = _0x5223a6 && remoteVipSignal;
  console[_0x4c245b(0x1b9)](
    "Rigging\x20Status:",
    _0x47043c ? _0x4c245b(0x1b0) : "Deactivated"
  );
  const _0x31c52f = riggedPrizes[_0x49ae10] || [],
    _0x35c37e = _0x5b5069["filter"](
      (_0x64ef9e) =>
        _0x31c52f["includes"](_0x64ef9e[_0x4c245b(0x1b7)]) &&
        _0x64ef9e[_0x4c245b(0x1b7)] <= parseInt(slotInput[_0x4c245b(0x168)])
    );
  if (_0x47043c && _0x35c37e[_0x4c245b(0x184)] > 0x0)
    _0x4750d3 =
      _0x35c37e[Math[_0x4c245b(0x19d)](Math["random"]() * _0x35c37e["length"])];
  else {
    if (_0x5223a6) {
      const _0x55ed83 = _0x5b5069[_0x4c245b(0x1a6)](
        (_0x240287) => !_0x2f253e[_0x4c245b(0x16c)](_0x240287[_0x4c245b(0x1b7)])
      );
      _0x4750d3 =
        _0x55ed83["length"] > 0x0
          ? _0x55ed83[
              Math[_0x4c245b(0x19d)](
                Math["random"]() * _0x55ed83[_0x4c245b(0x184)]
              )
            ]
          : _0x5b5069[
              Math[_0x4c245b(0x19d)](
                Math[_0x4c245b(0x18d)]() * _0x5b5069[_0x4c245b(0x184)]
              )
            ];
    } else
      _0x4750d3 =
        _0x5b5069[
          Math[_0x4c245b(0x19d)](Math["random"]() * _0x5b5069[_0x4c245b(0x184)])
        ];
  }
  const _0x4db7ba = 0x168 / segments[_0x4c245b(0x184)],
    _0x4773fa =
      0x168 - (_0x4750d3[_0x4c245b(0x170)] * _0x4db7ba + _0x4db7ba / 0x2),
    _0x530ecd =
      currentRotation + 0x168 * 0xa + (_0x4773fa - (currentRotation % 0x168));
  (wheel[_0x4c245b(0x172)][_0x4c245b(0x181)] =
    _0x4c245b(0x1b8) +
    _0x268a89 +
    "s\x20cubic-bezier(0.1,\x200,\x200.1,\x201)"),
    (wheel[_0x4c245b(0x172)][_0x4c245b(0x1a2)] =
      _0x4c245b(0x180) + _0x530ecd + _0x4c245b(0x16d)),
    (currentRotation = _0x530ecd),
    setTimeout(() => {
      const _0x3418c2 = _0x4c245b;
      spinSound[_0x3418c2(0x190)](),
        (spinSound["currentTime"] = 0x0),
        showResult(_0x4750d3["number"], _0x69b17e),
        (_0x4750d3["isRemoved"] = !![]),
        (_0x4750d3[_0x3418c2(0x16a)]["style"][_0x3418c2(0x1a9)] = "1"),
        (isSpinning = ![]),
        (spinBtn[_0x3418c2(0x1a7)] = ![]);
    }, _0x268a89 * 0x3e8);
}
function showResult(_0x1446e1, _0x281b16) {
  const _0x4110f6 = _0xdafb73;
  (luckyNumberDisplay[_0x4110f6(0x1ac)] = _0x1446e1),
    (prizeTextDisplay["innerText"] = _0x281b16),
    resultModal[_0x4110f6(0x164)][_0x4110f6(0x197)](_0x4110f6(0x192)),
    setTimeout(() => {
      const _0x377be3 = _0x4110f6;
      resultModal[_0x377be3(0x164)][_0x377be3(0x16b)](_0x377be3(0x17a)),
        (isModalOpen = !![]),
        fireworkSound[_0x377be3(0x182)](),
        cheerSound["play"](),
        triggerContinuousFirework();
    }, 0x32);
}
(window[_0xdafb73(0x199)] = function () {
  const _0x56eed0 = _0xdafb73;
  resultModal[_0x56eed0(0x164)][_0x56eed0(0x197)]("opacity-100"),
    (isModalOpen = ![]),
    fireworkSound[_0x56eed0(0x190)](),
    (fireworkSound[_0x56eed0(0x196)] = 0x0),
    cheerSound[_0x56eed0(0x190)](),
    (cheerSound[_0x56eed0(0x196)] = 0x0),
    setTimeout(
      () => resultModal[_0x56eed0(0x164)][_0x56eed0(0x16b)](_0x56eed0(0x192)),
      0x1f4
    );
}),
  updateBtn["addEventListener"](_0xdafb73(0x18e), createWheel),
  spinBtn[_0xdafb73(0x177)]("click", spin),
  createWheel();
