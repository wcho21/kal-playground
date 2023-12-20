(()=>{"use strict";var e={407:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.table=new Map}get(e){var t;return null!==(t=this.table.get(e))&&void 0!==t?t:null}set(e,t){return this.table.set(e,t),t}}},984:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Environment=void 0,t.default=class{evaluateProgram(e,t){let r;for(const i of e.statements)r=this.evaluate(i,t);return r}evaluateBlock(e,t){let r;for(const i of e.statements)r=this.evaluate(i,t);return r}evaluatePrefixNumberExpression(e,t){if("+"===e)return t;if("-"===e)return-t;throw new Error(`bad prefix ${e}`)}evaluatePrefixBooleanExpression(e,t){if("!"===e)return!t;throw new Error(`bad prefix ${e}`)}evaluateBranchStatement(e,t){return this.evaluate(e.predicate,t)?this.evaluate(e.consequence,t):void 0!==e.alternative?this.evaluate(e.alternative,t):void 0}evaluateInfixExpression(e,t,r){if("boolean"==typeof t&&"boolean"==typeof r||"number"==typeof t&&"number"==typeof r){if("=="===e)return t===r;if("!="===e)return t!==r;if(">"===e)return t>r;if("<"===e)return t<r;if(">="===e)return t>=r;if("<="===e)return t<=r}if("number"==typeof t&&"number"==typeof r){if("+"===e)return t+r;if("-"===e)return t-r;if("*"===e)return t*r;if("/"===e)return t/r;throw new Error(`bad infix ${e} for number operands`)}throw new Error(`bad infix ${e}, with left '${t}' and right '${r}'`)}evaluate(e,t){if("program"===e.type)return this.evaluateProgram(e,t);if("block"===e.type)return this.evaluateBlock(e,t);if("branch statement"===e.type)return this.evaluateBranchStatement(e,t);if("expression statement"===e.type)return this.evaluate(e.expression,t);if("number node"===e.type)return e.value;if("boolean node"===e.type)return e.value;if("string node"===e.type)return e.value;if("infix expression"===e.type){const r=this.evaluate(e.left,t),i=this.evaluate(e.right,t);return this.evaluateInfixExpression(e.infix,r,i)}if("prefix expression"===e.type){const r=this.evaluate(e.expression,t);if(("+"===e.prefix||"-"===e.prefix)&&"number"==typeof r)return this.evaluatePrefixNumberExpression(e.prefix,r);if("!"===e.prefix&&"boolean"==typeof r)return this.evaluatePrefixBooleanExpression(e.prefix,r);throw new Error(`bad prefix expression: prefix: '${e.prefix}' with type: '${typeof r}'`)}if("assignment"===e.type){const r=this.evaluate(e.right,t);if("identifier"!==e.left.type)throw new Error("expected identifier on left value, but received "+typeof e.left.type);const i=e.left.value;return t.set(i,r),r}if("identifier"===e.type){const r=e.value,i=t.get(r);if(null===i)throw new Error(`identifier '${r}' not found`);return i}}};var n=r(407);Object.defineProperty(t,"Environment",{enumerable:!0,get:function(){return i(n).default}})},590:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.execute=void 0;const o=s(r(62)),u=s(r(858)),f=a(r(984));t.execute=e=>{const t=new o.default(e),r=new u.default(t).parseProgram(),i=new f.default,n=new f.Environment,a=i.evaluate(r,n);return String(a)}},321:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(r(255));class a{constructor(e){this.reader=new n.default(e,a.END_OF_INPUT)}pop(){const e=this.reader.read();return this.reader.next(),e}peek(){return this.reader.read()}}a.END_OF_INPUT="\0",t.default=a},255:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.chars=e,this.fallbackChar=t,this.index=0}read(){return this.index===this.chars.length?this.fallbackChar:this.chars[this.index]}next(){this.index!==this.chars.length&&this.index++}}},62:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=s(r(321)),u=a(r(558)),f=a(r(830));t.default=class{constructor(e){this.charBuffer=new o.default(e)}getToken(){this.skipWhitespaces();const e=this.charBuffer.peek();switch(e){case"+":case"-":case"*":case"/":{const e=this.charBuffer.pop();return u.operator(e)}case"(":case")":{const e=this.charBuffer.pop();return u.groupDelimiter(e)}case"{":case"}":{const e=this.charBuffer.pop();return u.blockDelimiter(e)}case"!":{this.charBuffer.pop();const e=this.readOperatorStartingWithBang();return u.operator(e)}case"=":{this.charBuffer.pop();const e=this.readOperatorStartingWithEqual();return u.operator(e)}case">":{this.charBuffer.pop();const e=this.readOperatorStartingWithGreaterThan();return u.operator(e)}case"<":{this.charBuffer.pop();const e=this.readOperatorStartingWithLessThan();return u.operator(e)}case"'":{this.charBuffer.pop();const[e,t]=this.readStringLiteral();return t?u.stringLiteral(e):u.illegal("'"+e)}case o.default.END_OF_INPUT:return u.end;default:if(f.isDigit(e)){const e=this.readNumberLiteral();return u.numberLiteral(e)}if(f.isLetter(e)){const e=this.readLettersAndDigits();return"참"===e||"거짓"===e?u.booleanLiteral(e):"만약"===e||"아니면"===e?u.keyword(e):u.identifier(e)}return this.charBuffer.pop(),u.illegal(e)}}skipWhitespaces(){for(;f.isWhitespace(this.charBuffer.peek());)this.charBuffer.pop()}readOperatorStartingWithBang(){return"="===this.charBuffer.peek()?(this.charBuffer.pop(),"!="):"!"}readOperatorStartingWithEqual(){return"="===this.charBuffer.peek()?(this.charBuffer.pop(),"=="):"="}readOperatorStartingWithGreaterThan(){return"="===this.charBuffer.peek()?(this.charBuffer.pop(),">="):">"}readOperatorStartingWithLessThan(){return"="===this.charBuffer.peek()?(this.charBuffer.pop(),"<="):"<"}readStringLiteral(){const e=[];for(;;){const t=this.charBuffer.pop();if("'"===t||t===o.default.END_OF_INPUT)return[e.join(""),"'"===t];e.push(t)}}readNumberLiteral(){return this.readDigits()+this.readDecimalPart()}readDigits(){const e=[];for(;f.isDigit(this.charBuffer.peek());)e.push(this.charBuffer.pop());return e.join("")}readDecimalPart(){return"."!==this.charBuffer.peek()?"":this.charBuffer.pop()+this.readDigits()}readLettersAndDigits(){const e=[];for(;f.isLetter(this.charBuffer.peek())||f.isDigit(this.charBuffer.peek());)e.push(this.charBuffer.pop());return e.join("")}}},558:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.end=t.illegal=t.keyword=t.blockDelimiter=t.groupDelimiter=t.stringLiteral=t.booleanLiteral=t.numberLiteral=t.identifier=t.operator=t.END_VALUE=void 0,t.END_VALUE="$end",t.operator=e=>({type:"operator",value:e}),t.identifier=e=>({type:"identifier",value:e}),t.numberLiteral=e=>({type:"number literal",value:e}),t.booleanLiteral=e=>({type:"boolean literal",value:e}),t.stringLiteral=e=>({type:"string literal",value:e}),t.groupDelimiter=e=>({type:"group delimiter",value:e}),t.blockDelimiter=e=>({type:"block delimiter",value:e}),t.keyword=e=>({type:"keyword",value:e}),t.illegal=e=>({type:"illegal",value:e}),t.end={type:"end",value:t.END_VALUE}},830:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWhitespace=t.isDigit=t.isLetter=void 0,t.isLetter=e=>1===e.length&&/^[a-zA-Z가-힣_]$/.test(e),t.isDigit=e=>1===e.length&&/^[0-9]$/.test(e),t.isWhitespace=e=>1===e.length&&/^[ \t\r\n]$/.test(e)},858:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(755),a=i(r(459)),s=e=>{switch(e){case"=":return 30;case"==":case"!=":case">":case"<":case">=":case"<=":return 40;case"+":case"-":return 50;case"*":case"/":return 60;default:return 0}};t.default=class{constructor(e){this.buffer=new a.default(e)}parseProgram(){const e=(0,n.makeProgram)();for(;!this.buffer.isEnd();){const t=this.parseStatement();null!==t&&e.statements.push(t)}return e}parseBlock(){const e=this.buffer.read();if("block delimiter"!==e.type||"{"!==e.value)throw new Error(`expected { but received ${e.type}`);this.buffer.next();const t=[];for(;;){const e=this.buffer.read();if("block delimiter"===e.type&&"}"===e.value){this.buffer.next();break}const r=this.parseStatement();null!==r&&t.push(r)}return(0,n.makeBlock)(t)}parseStatement(){const e=this.buffer.read();return"keyword"===e.type&&"만약"===e.value?(this.buffer.next(),this.parseBranchStatement()):this.parseExpressionStatement()}parseBranchStatement(){const e=this.parseExpression(0),t=this.parseBlock(),r=this.buffer.read();if("keyword"!==r.type||"아니면"!==r.value)return(0,n.makeBranchStatement)(e,t);this.buffer.next();const i=this.parseBlock();return(0,n.makeBranchStatement)(e,t,i)}parseExpressionStatement(){const e=this.parseExpression(0);return(0,n.makeExpressionStatement)(e)}parseExpression(e){let t=this.parsePrefixExpression();for(;!(s(this.buffer.read().value)<=e);){const e=this.parseInfixExpression(t);if(null===e)break;t=e}return t}parsePrefixExpression(){const e=this.buffer.read();if(this.buffer.next(),"number literal"===e.type)return this.parseNumberLiteral(e.value);if("boolean literal"===e.type)return this.parseBooleanLiteral(e.value);if("string literal"===e.type)return this.parseStringLiteral(e.value);if("identifier"===e.type)return(0,n.makeIdentifier)(e.value);if("operator"===e.type&&("+"===e.value||"-"===e.value||"!"===e.value)){const t=this.parseExpression(70),r=e.value;return(0,n.makePrefixExpression)(r,t)}if("group delimiter"===e.type&&"("===e.value){const e=this.parseExpression(0),t=this.buffer.read();if(this.buffer.next(),"group delimiter"!==t.type||")"!==t.value)throw new Error(`expected ) but received ${t.type}`);return e}throw new Error(`bad token type ${e.type} (${e.value}) for prefix expression`)}parseInfixExpression(e){let t=this.buffer.read();if("operator"!==t.type)return null;const r=t.value;return this.buffer.next(),"="===r&&"identifier"===e.type?this.parseAssignment(e):"+"===r||"-"===r||"*"===r||"/"===r||"!="===r||"=="===r||">"===r||"<"===r||">="===r||"<="===r?this.parseArithmeticInfixExpression(e,r):null}parseAssignment(e){const t=s("="),r=this.parseExpression(t);return(0,n.makeAssignment)(e,r)}parseArithmeticInfixExpression(e,t){const r=s(t),i=this.parseExpression(r);return(0,n.makeInfixExpression)(t,e,i)}parseNumberLiteral(e){const t=Number(e);if(Number.isNaN(t))throw new Error(`expected non-NaN number, but received '${e}'`);return(0,n.makeNumberNode)(t)}parseBooleanLiteral(e){const t="참"===e;return(0,n.makeBooleanNode)(t)}parseStringLiteral(e){return(0,n.makeStringNode)(e)}}},637:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeAssignment=t.makeInfixExpression=t.makePrefixExpression=t.makeStringNode=t.makeBooleanNode=t.makeNumberNode=t.makeIdentifier=void 0,t.makeIdentifier=e=>({type:"identifier",value:e}),t.makeNumberNode=e=>({type:"number node",value:e}),t.makeBooleanNode=e=>({type:"boolean node",value:e}),t.makeStringNode=e=>({type:"string node",value:e}),t.makePrefixExpression=(e,t)=>({type:"prefix expression",prefix:e,expression:t}),t.makeInfixExpression=(e,t,r)=>({type:"infix expression",infix:e,left:t,right:r}),t.makeAssignment=(e,t)=>({type:"assignment",left:e,right:t})},628:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeBlock=t.makeProgram=void 0,t.makeProgram=(e=[])=>({type:"program",statements:e}),t.makeBlock=(e=[])=>({type:"block",statements:e})},755:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(637),t),n(r(501),t),n(r(628),t)},501:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeExpressionStatement=t.makeBranchStatement=void 0,t.makeBranchStatement=(e,t,r)=>({type:"branch statement",predicate:e,consequence:t,alternative:r}),t.makeExpressionStatement=e=>({type:"expression statement",expression:e})},459:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.lexer=e,this.token=e.getToken()}isEnd(){return"end"===this.token.type}read(){return this.token}next(){this.token=this.lexer.getToken()}}}},t={},r=function r(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,r),a.exports}(590);window.kal=r})();