(()=>{"use strict";function t(l,e="",r=!0){null!=l&&(null!==l.right&&t(l.right,`${e}${r?"│   ":"    "}`,!1),console.log(`${e}${r?"└── ":"┌── "}${l.data}`),null!==l.left&&t(l.left,`${e}${r?"    ":"│   "}`,!0))}class l{constructor(t){this.data=t,this.right=null,this.left=null}}function e(t,r,n){if(r>n)return null;let o=Math.floor((r+n)/2),i=new l(t[o]);return i.left=e(t,r,o-1),i.right=e(t,o+1,n),i}let r=[4,5,3,4,1,23,1,4,7,8,7];console.log(r),r=function(t){t.sort((function(t,l){return t-l}));let l=t.length,e=[];e.push(t[0]);for(let r=1;r<l;r++)t[r]!=t[r-1]&&e.push(t[r]);return e}(r),console.log(r);let n=new class{constructor(t){console.log("before"),this.root=e(t,0,t.length-1),console.log("after")}insert(t,e=this.root){return null==e||e.data==t?(console.log(e),e=new l(t)):(parseInt(t)>parseInt(e.data)?e.right=this.insert(t,e.right):e.left=this.insert(t,e.left),e)}delete(t,l=this.root){if(null==l)return l;if(l.data>t)return l.left=this.delete(t,l.left),l;if(l.data<t)return l.right=this.delete(t,l.right),l;if(null==l.left&&null!=l.right)return l.right;if(null==l.right&&null!=l.left)return l.left;if(null!=l.right&&null!=l.left){const t=this.findSuccessor(l.right);return l.data=t.data,l.right=this.delete(t.data,l.right),l}}find(t){let l=this.root;for(;null!=l&&l.data!=t;)l=t>l.data?l.right:l.left;return l}graph(){console.log(this.root),t(this.root)}findSuccessor(t){let l=t;for(;null!=l.left;)l=l.left;return l}}(r);n.graph(),n.insert(77),n.insert(11),n.graph(),n.delete(1),n.graph(),n.delete(8),n.graph(),n.delete(11),n.graph(),console.log(n.find(77)),console.log(n.find(1)),console.log(n.find(23))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FDdEJOLEVBQUtHLE1BQVFRLEtBQUtvQixPQUFPQyxFQUFVMUIsS0FBTU4sRUFBS0csT0FFdkNILENBQ1gsQ0FFSixDQUdBLElBQUFrQyxDQUFLeEIsR0FDRCxJQUFJVixFQUFPVyxLQUFLaUIsS0FDaEIsS0FBYyxNQUFSNUIsR0FBZ0JBLEVBQUtNLE1BQVFJLEdBRTNCVixFQUREVSxFQUFNVixFQUFLTSxLQUNITixFQUFLRyxNQUVMSCxFQUFLTyxLQUlwQixPQUFPUCxDQUVYLENBR0EsS0FBQW1DLEdBQ0kvQixRQUFRQyxJQUFJTSxLQUFLaUIsTUFDakI3QixFQUFZWSxLQUFLaUIsS0FDckIsQ0FFQSxhQUFBSyxDQUFjTCxHQUNWLElBQUk1QixFQUFPNEIsRUFDWCxLQUFvQixNQUFiNUIsRUFBS08sTUFDVlAsRUFBT0EsRUFBS08sS0FFZCxPQUFPUCxDQUNYLEdEdkRnQlksR0FDcEJlLEVBQUtRLFFBRUxSLEVBQUtFLE9BQU8sSUFDWkYsRUFBS0UsT0FBTyxJQUVaRixFQUFLUSxRQUVMUixFQUFLSSxPQUFPLEdBQ1pKLEVBQUtRLFFBRUxSLEVBQUtJLE9BQU8sR0FDWkosRUFBS1EsUUFFTFIsRUFBS0ksT0FBTyxJQUNaSixFQUFLUSxRQUdML0IsUUFBUUMsSUFBSXNCLEVBQUtPLEtBQUssS0FDdEI5QixRQUFRQyxJQUFJc0IsRUFBS08sS0FBSyxJQUN0QjlCLFFBQVFDLElBQUlzQixFQUFLTyxLQUFLLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ25tZW50LWJzdC8uL3NyYy9wcmV0dHlQcmludC5qcyIsIndlYnBhY2s6Ly9hc3NpZ25tZW50LWJzdC8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2Fzc2lnbm1lbnQtYnN0Ly4vc3JjL3RvQlNULmpzIiwid2VicGFjazovL2Fzc2lnbm1lbnQtYnN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Fzc2lnbm1lbnQtYnN0Ly4vc3JjL3RyZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHByZXR0eVByaW50IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhub2RlKTtcclxuICAgIGlmIChub2RlID09IG51bGwpIHsgICAgXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xyXG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgeyBwcmV0dHlQcmludCB9OyIsIlxyXG5cclxuXHJcbmNsYXNzIE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdmFsO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE5vZGUgfTtcclxuIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gdG9CU1QoYXJyLCBzdGFydCwgZW5kKSB7XHJcbiAgICBpZihzdGFydCA+IGVuZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcclxuXHJcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGFyclttaWRdKTtcclxuXHJcbiAgICBub2RlLmxlZnQgPSB0b0JTVChhcnIsIHN0YXJ0LCBtaWQtMSk7XHJcbiAgICBub2RlLnJpZ2h0ID0gdG9CU1QoYXJyLCBtaWQrMSwgZW5kKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHRvQlNUIH07IiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcbmltcG9ydCB7IHRvQlNUIH0gZnJvbSAnLi90b0JTVCc7XHJcbmltcG9ydCB7IFRyZWUgfSBmcm9tICcuL3RyZWUnO1xyXG5cclxuZnVuY3Rpb24gc29ydEFuZFJlbW92ZUR1cGxpY2F0ZXMoYXJyKSB7XHJcbiAgICAvLyBTb3J0IHRoZSBhcnJheVxyXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiIH0pO1xyXG4gICAgLy8gcmVtb3ZlIGR1cGxpY2F0ZXNcclxuICAgIGxldCBuID0gYXJyLmxlbmd0aDtcclxuICAgIGxldCBuZXdBcnIgPSBbXTtcclxuICAgIG5ld0Fyci5wdXNoKGFyclswXSk7XHJcbiAgICBmb3IobGV0IGk9MTsgaTxuOyBpKyspIHtcclxuICAgICAgICBpZihhcnJbaV0gIT0gYXJyW2ktMV0pXHJcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKGFycltpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobmV3QXJyKTtcclxuXHJcbiAgICByZXR1cm4gbmV3QXJyO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYnVpbGRUcmVlKGFycikge1xyXG4gICAgYXJyID0gc29ydEFuZFJlbW92ZUR1cGxpY2F0ZXMoYXJyKTtcclxuICAgIFxyXG4gICAgbGV0IHJvb3QgPSB0b0JTVChhcnIsIDAsIGFyci5sZW5ndGgtMSk7XHJcblxyXG4gICAgLy8gcHJldHR5UHJpbnQocm9vdCk7XHJcblxyXG4gICAgcmV0dXJuIHJvb3Q7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwKG5vZGUpIHtcclxuICAgIGlmKG5vZGUgPT0gbnVsbClcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5kaXNwKG5vZGUubGVmdCk7XHJcbiAgICBjb25zb2xlLmxvZyhub2RlLmRhdGEpO1xyXG4gICAgdGhpcy5kaXNwKG5vZGUucmlnaHQpO1xyXG5cclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcblxyXG5sZXQgYXJyID0gWzQsIDUsIDMsIDQsIDEsIDIzLCAxLCA0LCA3LCA4LCA3XTtcclxuY29uc29sZS5sb2coYXJyKTtcclxuYXJyID0gc29ydEFuZFJlbW92ZUR1cGxpY2F0ZXMoYXJyKTtcclxuY29uc29sZS5sb2coYXJyKTtcclxuLy8gYnVpbGRUcmVlKGFycik7XHJcbmxldCB0cmVlID0gbmV3IFRyZWUoYXJyKTtcclxudHJlZS5ncmFwaCgpO1xyXG4vLyBjb25zb2xlLmxvZyh0cmVlLnJvb3QpO1xyXG50cmVlLmluc2VydCg3Nyk7XHJcbnRyZWUuaW5zZXJ0KDExKTtcclxuLy8gdHJlZS5pbnNlcnQoMCk7XHJcbnRyZWUuZ3JhcGgoKTtcclxuXHJcbnRyZWUuZGVsZXRlKDEpO1xyXG50cmVlLmdyYXBoKCk7XHJcblxyXG50cmVlLmRlbGV0ZSg4KTtcclxudHJlZS5ncmFwaCgpO1xyXG5cclxudHJlZS5kZWxldGUoMTEpO1xyXG50cmVlLmdyYXBoKCk7XHJcblxyXG5cclxuY29uc29sZS5sb2codHJlZS5maW5kKDc3KSk7XHJcbmNvbnNvbGUubG9nKHRyZWUuZmluZCgxKSk7XHJcbmNvbnNvbGUubG9nKHRyZWUuZmluZCgyMykpOyIsImltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vcHJldHR5UHJpbnRcIjtcclxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vbm9kZSc7XHJcbmltcG9ydCB7IHRvQlNUIH0gZnJvbSAnLi90b0JTVCc7XHJcblxyXG4vLyBjb25zdCB7IHRvQlNUIH0gPSByZXF1aXJlKFwiLi90b0JTVFwiKTtcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIFRyZWUge1xyXG4gICAgY29uc3RydWN0b3IoYXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmVcIik7XHJcbiAgICAgICAgdGhpcy5yb290ID0gdG9CU1QoYXJyLCAwLCBhcnIubGVuZ3RoLTEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0KHZhbCwgbm9kZSA9IHRoaXMucm9vdCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUpO1xyXG4gICAgICAgIGlmKG5vZGUgPT0gbnVsbCB8fCBub2RlLmRhdGEgPT0gdmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlID0gbmV3IE5vZGUodmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwYXJzZUludCh2YWwpID4gcGFyc2VJbnQobm9kZS5kYXRhKSkge1xyXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gdGhpcy5pbnNlcnQodmFsLCBub2RlLnJpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLmxlZnQgPSB0aGlzLmluc2VydCh2YWwsIG5vZGUubGVmdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUodmFsLCBub2RlID0gdGhpcy5yb290KSB7XHJcbiAgICAgICAgLy8gQmFzZSBDYXNlOlxyXG4gICAgICAgIGlmKG5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlY3Vyc2l2bGUgY2FsbHMgZm9yIGFuY2VzdG9ycyBvZiBub2RlIHRvIGJlIGRlbGV0ZWQuXHJcbiAgICAgICAgaWYobm9kZS5kYXRhID4gdmFsKSB7XHJcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IHRoaXMuZGVsZXRlKHZhbCwgbm9kZS5sZWZ0KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmKG5vZGUuZGF0YSA8IHZhbCkge1xyXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gdGhpcy5kZWxldGUodmFsLCBub2RlLnJpZ2h0KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZSByZWFjaCBoZXJlIGlmIHRoZSBub2RlIGlzIHRoZSBub2RlIHRvIGJlIGRlbGV0ZWQuLlxyXG5cclxuICAgICAgICAvLyBUaGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBzY2VuYXJpbyBcclxuICAgICAgICAvLyAxLSBpZiB0aGUgbm9kZSBoYXMganVzdCBvbmUgY2hpbGRcclxuICAgICAgICAvLyBtYWtlIHRoZSBub2RlIHBvaW50cyB0byBpdHMgcmlnaHQgb3IgbGVmdCBjaGlsZFxyXG4gICAgICAgIGlmKG5vZGUubGVmdCA9PSBudWxsICYmIG5vZGUucmlnaHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5vZGUucmlnaHQgPT0gbnVsbCAmJiBub2RlLmxlZnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDItIElmIHRoZSBub2RlIGhhcyB0d28gY2hpbGRyZW5cclxuICAgICAgICAvLyBOb3csIHdlIGhhdmUgdG8gcmVwbGFjZSB0aGUgdmFsdWUgb2YgdGhlIG5vZGUgd2Ugd2FudCB0byByZW1vdmUgd2l0aCB0aGUgXHJcbiAgICAgICAgLy8gdmFsdWUgb2YgdGlzIHN1Y2Nlc3NvciAodGhlIHNtYWxsZXN0IHZhbHVlIGluIHRoZSByaWdodCBzdWIgdHJlZSlcclxuICAgICAgICAvLyBUaGVuLCBEZWxldGUgdGhlIHN1Y2Nlc3NvciBub2RlIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIG5vZGUgeW91IHdhbnQgdG8gcmVtb3ZlICAgICAgIFxyXG5cclxuICAgICAgICBpZihub2RlLnJpZ2h0ICE9IG51bGwgJiYgbm9kZS5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yID0gdGhpcy5maW5kU3VjY2Vzc29yKG5vZGUucmlnaHQpO1xyXG4gICAgICAgICAgICBub2RlLmRhdGEgPSBzdWNjZXNzb3IuZGF0YTtcclxuICAgICAgICAgICAgbm9kZS5yaWdodCA9IHRoaXMuZGVsZXRlKHN1Y2Nlc3Nvci5kYXRhLCBub2RlLnJpZ2h0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpbmQodmFsKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnJvb3Q7XHJcbiAgICAgICAgd2hpbGUobm9kZSAhPSBudWxsICYmIG5vZGUuZGF0YSAhPSB2YWwpIHtcclxuICAgICAgICAgICAgaWYodmFsID4gbm9kZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ3JhcGgoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yb290KTtcclxuICAgICAgICBwcmV0dHlQcmludCh0aGlzLnJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRTdWNjZXNzb3Iocm9vdCkge1xyXG4gICAgICAgIGxldCBub2RlID0gcm9vdDtcclxuICAgICAgICB3aGlsZSAobm9kZS5sZWZ0ICE9IG51bGwpIHtcclxuICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBUcmVlIH07Il0sIm5hbWVzIjpbInByZXR0eVByaW50Iiwibm9kZSIsInByZWZpeCIsImlzTGVmdCIsInJpZ2h0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJsZWZ0IiwiTm9kZSIsImNvbnN0cnVjdG9yIiwidmFsIiwidGhpcyIsImFyciIsInN0YXJ0IiwiZW5kIiwibWlkIiwiTWF0aCIsImZsb29yIiwic29ydCIsImEiLCJiIiwibiIsImxlbmd0aCIsIm5ld0FyciIsInB1c2giLCJpIiwic29ydEFuZFJlbW92ZUR1cGxpY2F0ZXMiLCJ0cmVlIiwicm9vdCIsImluc2VydCIsInBhcnNlSW50IiwiZGVsZXRlIiwic3VjY2Vzc29yIiwiZmluZFN1Y2Nlc3NvciIsImZpbmQiLCJncmFwaCJdLCJzb3VyY2VSb290IjoiIn0=