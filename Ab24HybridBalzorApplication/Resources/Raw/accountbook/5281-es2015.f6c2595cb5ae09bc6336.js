"use strict";(self.webpackChunkaccoubtbook=self.webpackChunkaccoubtbook||[]).push([[5281],{95281:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return a}});var o=n(71567),r=n(39461);n(40960);const a=(t,e,n,a,c)=>{const s=t.ownerDocument.defaultView;return(0,r.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:n,onMove:t=>{a(t.deltaX/s.innerWidth)},onEnd:t=>{const e=s.innerWidth,n=t.deltaX/e,r=t.velocityX,a=r>=0&&(r>.2||t.deltaX>e/2),u=(a?1-n:n)*e;let i=0;if(u>5){const t=u/Math.abs(r);i=Math.min(t,540)}c(a,n<=0?.01:(0,o.k)(0,n,.9999),i)}})}}}]);