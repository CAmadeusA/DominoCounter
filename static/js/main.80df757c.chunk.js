(this.webpackJsonpdomino=this.webpackJsonpdomino||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(13),n(3)),s=n(4),v=n(7),m=n(6),l=(n(14),n(5)),u=n.n(l),h=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).count=-1,a.handleTakePhoto=function(e){a.setState({photo:e})},a.countDots=function(){document.getElementById("result").innerText="";var e=cv.imread("imgSrc"),t=e.clone(),n=new cv.MatVector,o=new cv.Mat,c=new cv.MatVector,r=new cv.MatVector,i=new cv.MatVector;cv.cvtColor(e,e,cv.COLOR_RGBA2GRAY),cv.GaussianBlur(e,e,new cv.Size(3,3),2,2),cv.Canny(e,e,60,90,3),cv.findContours(e,n,o,cv.RETR_LIST,cv.CHAIN_APPROX_NONE);for(var s=0;s<n.size();s++){var v=cv.contourArea(n.get(s)),m=cv.arcLength(n.get(s),!1),l=Math.abs(m/v);v>100&&Math.abs(2*Math.sqrt(cv.contourArea(n.get(s))/Math.PI)*Math.PI-cv.arcLength(n.get(s),!1))<6&&l-25<4?c.push_back(n.get(s)):v>200&&Math.abs(l-2)<1&&i.push_back(n.get(s))}for(var u=0;u<c.size();u++){for(var h=cv.moments(c.get(u)),d=h.m10/h.m00,g=h.m01/h.m00,f=!1,w=u+1%c.size();w<c.size();w++){var b=cv.moments(c.get(w)),M=b.m10/b.m00,p=b.m01/b.m00,E=Math.abs(d-M)+1e-4,z=Math.abs(g-p)+1e-4,k=2*Math.sqrt(cv.contourArea(n.get(u))/Math.PI);if(E>0&&E<k&&z>0&&z<k){f=!0;break}}f||r.push_back(c.get(u))}a.count=r.size()+1;for(var A=1,I=0;I<r.size();I++){for(var R=cv.moments(r.get(I)),y=R.m10/R.m00,P=R.m01/R.m00,S=(I+1)%r.size();S<r.size();S++){var _=cv.moments(r.get(S)),C=_.m10/_.m00,O=_.m01/_.m00;Math.abs(y-C)<1&&Math.abs(P-O)<1&&(a.count--,A--)}for(var T=!1,x=0;x<i.size();x++){var B=cv.minAreaRect(i.get(x)),L=B.center,N=B.size.width>B.size.height?B.size.width:2*B.size.height,D=L.x-N,j=L.x+N,V=L.y-N,G=L.y+N;if(y>D&&y<j&&P>V&&P<G){T=!0,document.getElementById("debug").innerText+="Found dot in rectangle at: ("+y+", "+P+") \n";break}}T&&(A++,cv.circle(t,new cv.Point(y,P),3,new cv.Scalar(0,0,255,255),2,cv.LINE_8,0)),cv.drawContours(t,r,I,new cv.Scalar(255,0,0,255),2)}for(var q=0;q<i.size();q++)for(var F=cv.minAreaRect(i.get(q)),J=cv.RotatedRect.points(F),W=0;W<4;W++)cv.line(t,J[W],J[(W+1)%4],new cv.Scalar(0,255,0,255),2,cv.LINE_AA,0);document.getElementById("result").innerText="Counted: "+a.count+", and verified: "+A,cv.imshow("imgDst",t)},a.state={photo:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.showResult&&cv.imshow("imgDst"),o.a.createElement("div",null,o.a.createElement(u.a,{isImageMirror:!1,idealFacingMode:"environment",isMaxResolution:!0,onTakePhoto:function(t){e.handleTakePhoto(t)}}),o.a.createElement("img",{alt:"hidden",id:"imgSrc",src:this.state.photo,onLoad:this.countDots,style:{position:"absolute",left:"-1000%"}}),o.a.createElement("div",null,"(0.31.2.0) Amount: ",o.a.createElement("div",{id:"result"})),o.a.createElement("div",{id:"debug"}),o.a.createElement("canvas",{id:"imgDst"}))}}]),n}(o.a.Component);var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.80df757c.chunk.js.map