(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),o=e(4),a=e.n(o),u=e(172),c=(e(48),e(152),e(7)),s=e.n(c),l=(e(220),e(142)),f=e.n(l),p=e(149),m=e(146),d=e(141),h=e(144),g=(e(171),e(153));function b(){var n=f()(["font-size: 2.2rem"]);return b=function(){return n},n}function v(){var n=f()(["width: ","px; height: ","px;"]);return v=function(){return n},n}function x(){var n=f()(["width: ","px; height: ","px;"]);return x=function(){return n},n}function y(){var n=f()(["width: ","px; height: ","px;"]);return y=function(){return n},n}function w(){var n=f()(["width: ","px; height: ","px;"]);return w=function(){return n},n}var k=[g.g,g.c],_=26,z=32,E=42,C=d.b.svg.withConfig({displayName:"interfaces__SvgIcon",componentId:"sc-30w2or-0"})(["width:","px;height:","px;",";",";",";",";"],E,E,h.g.desktop(w(),E,E),h.g.tablet(y(),E,E),h.g.tablet(x(),z,z),h.g.phone(v(),_,_)),I=d.b.div.withConfig({displayName:"interfaces__Container",componentId:"sc-30w2or-1"})(["display:inline-flex;",";"],h.g.tablet(b())),N=d.b.span.withConfig({displayName:"interfaces__IconBox",componentId:"sc-30w2or-2"})(["position:relative;display:inline-flex;align-items:center;margin:0px 0.3rem 0px 0.3rem;"]),M=function(n){function t(){return n.apply(this,arguments)||this}s()(t,n);var e=t.prototype;return e.random_item=function(n){return n[Math.floor(Math.random()*n.length)]},e.render=function(){var n=this.random_item(k);return i.a.createElement(I,null,"Design",i.a.createElement(N,null,i.a.createElement(C,null,n())),"interfaces.")},t}(r.PureComponent);function S(){var n=f()(["font-size: 32px;"]);return S=function(){return n},n}function D(){var n=f()(["font-size: 48px;"]);return D=function(){return n},n}function T(){var n=f()(["font-size: 68px;"]);return T=function(){return n},n}function j(){var n=f()(["font-size: 56px;"]);return j=function(){return n},n}function B(){var n=f()(["font-size: 40px;"]);return B=function(){return n},n}function q(){var n=f()(["font-size: 50px;"]);return q=function(){return n},n}function H(){var n=f()(["font-size: 70px;"]);return H=function(){return n},n}function L(){var n=f()(["font-size: 70px;"]);return L=function(){return n},n}function O(){var n=f()(["font-size: ",";"]);return O=function(){return n},n}function R(){var n=f()(["font-size: ",";"]);return R=function(){return n},n}function G(){var n=f()(["margin-top: 10px"]);return G=function(){return n},n}function J(){var n=f()(["padding-top: 150px;"]);return J=function(){return n},n}var P=Object(d.b)(h.e).withConfig({displayName:"hero__HeroContainer",componentId:"sc-1fbd3kk-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100%;max-height:100vh;",";div{width:100%;}",";"],h.h.flexCenter,h.g.tablet(J()),h.g.phone(G())),A=d.b.h1.withConfig({displayName:"hero__Hi",componentId:"sc-1fbd3kk-1"})(["color:",";margin:0 0 0 3px;font-size:",";font-weight:normal;",";",";"],h.i.colors.darkblueMedium,h.i.fontSizes.large,h.g.desktop(R(),h.i.fontSizes.small),h.g.tablet(O(),h.i.fontSizes.smallish)),F=d.b.h2.withConfig({displayName:"hero__Name",componentId:"sc-1fbd3kk-2"})(["font-size:80px;line-height:1.1;margin:0;font-family:",";font-weight:300;color:",";",";",";",";",";"],h.i.fonts.RBNo31,h.i.colors.darkblue,h.g.desktop(L()),h.g.tablet(H()),h.g.phablet(q()),h.g.phone(B())),K=d.b.h3.withConfig({displayName:"hero__Subtitle",componentId:"sc-1fbd3kk-3"})(["font-size:56px;line-height:1.1;font-weight:400;color:",";",";",";",";",";"],h.i.colors.darkblueMedium,h.g.desktop(j()),h.g.tablet(T()),h.g.phablet(D()),h.g.phone(S())),Q=d.b.div.withConfig({displayName:"hero__Blurb",componentId:"sc-1fbd3kk-4"})(["margin-top:25px;width:50%;max-width:590px;a{",";}"],h.h.inlineLink),U=d.b.div.withConfig({displayName:"hero__EmailButton",componentId:"sc-1fbd3kk-5"})([""]),V=Object(d.b)(h.a).withConfig({displayName:"hero__EmailLink",componentId:"sc-1fbd3kk-6"})(["",";font-size:",";margin-top:10px;"],h.h.bigButton,h.i.fontSizes.medium),W=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))||this).state={isMounted:!1},t}s()(t,n);var e=t.prototype;return e.componentDidMount=function(){var n=this;setTimeout(function(){return n.setState({isMounted:!0})},1e3)},e.render=function(){var n=this.props.data,t=this.state.isMounted,e=n[0].node,r=e.frontmatter,o=e.html,a=[function(){return i.a.createElement(A,{style:{transitionDelay:"100ms"}},r.title)},function(){return i.a.createElement(F,{style:{transitionDelay:"200ms"}},r.name)},i.a.createElement(K,{style:{transitionDelay:"300ms"}},i.a.createElement(M,null)),function(){return i.a.createElement(Q,{style:{transitionDelay:"400ms"},dangerouslySetInnerHTML:{__html:o}})},function(){return i.a.createElement(U,{style:{transitionDelay:"500ms"}},i.a.createElement(V,{href:"mailto:"+m.email},"Get In Touch"))},i.a.createElement("footer",null)];return i.a.createElement(P,null,i.a.createElement(p.TransitionGroup,null,t&&a.map(function(n,t){return i.a.createElement(p.CSSTransition,{key:t,classNames:"fadeup",timeout:3e3},n)})))},t}(r.Component);W.propTypes={data:a.a.array.isRequired};var X=W;e.d(t,"query",function(){return $});var Y=Object(d.b)(h.b).withConfig({displayName:"pages__MainContainer",componentId:"sc-1dngrz5-0"})(["",";counter-reset:section;"],h.h.sidePadding),Z=function(n){var t=n.data,e=n.location;return i.a.createElement(u.a,{location:e},i.a.createElement(Y,{id:"content"},i.a.createElement(X,{data:t.hero.edges})))};Z.propTypes={data:a.a.object.isRequired,location:a.a.object};t.default=Z;var $="146158123"},220:function(n,t,e){"use strict";e(158)("small",function(n){return function(){return n(this,"small","","")}})}}]);
//# sourceMappingURL=component---src-pages-index-js-9138b69ec0e8d0e79b20.js.map