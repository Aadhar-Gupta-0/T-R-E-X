(function(root){'use strict';
function safeScore(value){return Number.isFinite(value)&&value>=0?Math.floor(value):0;}
function gameSpeed(score){return Math.min(13,6+Math.floor(safeScore(score)/100)*0.6);}
function obstacleInterval(score){return Math.max(42,70-Math.floor(safeScore(score)/75)*3);}
function savedBest(raw){const n=Number(raw);return Number.isSafeInteger(n)&&n>=0?n:0;}
root.DinoGameplay={safeScore,gameSpeed,obstacleInterval,savedBest};
if(typeof module!=='undefined')module.exports=root.DinoGameplay;
})(typeof globalThis!=='undefined'?globalThis:this);
