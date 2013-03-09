smalltalk.addPackage('Helios-Browser');
smalltalk.addClass('HLBrowser', smalltalk.HLWidget, ['model', 'packagesListWidget', 'classesListWidget', 'protocolsListWidget', 'methodsListWidget', 'sourceWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._announcer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLBrowser)})},
args: [],
source: "announcer\x0a\x09^ self model announcer",
messageSends: ["announcer", "model"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_classesListWidget",
smalltalk.method({
selector: "classesListWidget",
category: 'widgets',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@classesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classesListWidget"]=_st((smalltalk.HLClassesListWidget || HLClassesListWidget))._on_(_st(self)._model());
self["@classesListWidget"];
$1=_st(self["@classesListWidget"])._next_(_st(self)._protocolsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesListWidget",{}, smalltalk.HLBrowser)})},
args: [],
source: "classesListWidget\x0a\x09^ classesListWidget ifNil: [\x0a      \x09classesListWidget := HLClassesListWidget on: self model.\x0a\x09\x09classesListWidget next: self protocolsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "protocolsListWidget"],
referencedClasses: ["HLClassesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._environment();
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLBrowser)})},
args: [],
source: "environment\x0a\x09^ self model environment",
messageSends: ["environment", "model"],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_methodsListWidget",
smalltalk.method({
selector: "methodsListWidget",
category: 'widgets',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@methodsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@methodsListWidget"]=_st((smalltalk.HLMethodsListWidget || HLMethodsListWidget))._on_(_st(self)._model());
$1=self["@methodsListWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsListWidget",{}, smalltalk.HLBrowser)})},
args: [],
source: "methodsListWidget\x0a\x09^ methodsListWidget ifNil: [\x0a      \x09methodsListWidget := HLMethodsListWidget on: self model ]",
messageSends: ["ifNil:", "on:", "model"],
referencedClasses: ["HLMethodsListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@model"]=_st((smalltalk.HLBrowserModel || HLBrowserModel))._new();
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLBrowser)})},
args: [],
source: "model\x0a\x09^ model ifNil: [ model := HLBrowserModel new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLBrowserModel"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLBrowser)})},
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_packagesListWidget",
smalltalk.method({
selector: "packagesListWidget",
category: 'widgets',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@packagesListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@packagesListWidget"]=_st((smalltalk.HLPackagesListWidget || HLPackagesListWidget))._on_(_st(self)._model());
self["@packagesListWidget"];
$1=_st(self["@packagesListWidget"])._next_(_st(self)._classesListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"packagesListWidget",{}, smalltalk.HLBrowser)})},
args: [],
source: "packagesListWidget\x0a\x09^ packagesListWidget ifNil: [\x0a      \x09packagesListWidget := HLPackagesListWidget on: self model.\x0a\x09\x09packagesListWidget next: self classesListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "classesListWidget"],
referencedClasses: ["HLPackagesListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_protocolsListWidget",
smalltalk.method({
selector: "protocolsListWidget",
category: 'widgets',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@protocolsListWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@protocolsListWidget"]=_st((smalltalk.HLProtocolsListWidget || HLProtocolsListWidget))._on_(_st(self)._model());
self["@protocolsListWidget"];
$1=_st(self["@protocolsListWidget"])._next_(_st(self)._methodsListWidget());
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocolsListWidget",{}, smalltalk.HLBrowser)})},
args: [],
source: "protocolsListWidget\x0a\x09^ protocolsListWidget ifNil: [\x0a      \x09protocolsListWidget := HLProtocolsListWidget on: self model.\x0a\x09\x09protocolsListWidget next: self methodsListWidget ]",
messageSends: ["ifNil:", "on:", "model", "next:", "methodsListWidget"],
referencedClasses: ["HLProtocolsListWidget"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_registerBindingsOn_",
smalltalk.method({
selector: "registerBindingsOn:",
category: 'keybindings',
fn: function (aBindingGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=aBindingGroup;
_st($1)._addGroupKey_labelled_((66),"Browse");
_st($1)._addGroupKey_labelled_((71),"Go to");
$2=_st($1)._addGroupKey_labelled_((84),"Toggle");
_st(_st((smalltalk.HLBrowserCommand || HLBrowserCommand))._withAllSubclasses())._do_((function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(each)._key();
if(($receiver = $3) == nil || $receiver == undefined){
return $3;
} else {
return _st(_st(aBindingGroup)._at_(_st(each)._bindingGroup()))._add_(_st(_st(each)._on_(_st(self)._model()))._asBinding());
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"registerBindingsOn:",{aBindingGroup:aBindingGroup}, smalltalk.HLBrowser)})},
args: ["aBindingGroup"],
source: "registerBindingsOn: aBindingGroup\x0a\x09aBindingGroup \x0a    \x09addGroupKey: 66 labelled: 'Browse';\x0a        addGroupKey: 71 labelled: 'Go to';\x0a        addGroupKey: 84 labelled: 'Toggle'.\x0a        \x0a   \x09HLBrowserCommand withAllSubclasses do: [ :each |\x0a   \x09\x09each key ifNotNil: [\x0a  \x09\x09\x09(aBindingGroup at: each bindingGroup) \x0a  \x09\x09\x09\x09add: (each on: self model) asBinding ] ]",
messageSends: ["addGroupKey:labelled:", "do:", "ifNotNil:", "add:", "asBinding", "on:", "model", "at:", "bindingGroup", "key", "withAllSubclasses"],
referencedClasses: ["HLBrowserCommand"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(_st((smalltalk.HLContainer || HLContainer))._with_(_st((smalltalk.HLHorizontalSplitter || HLHorizontalSplitter))._with_with_(_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st(self)._packagesListWidget(),_st(self)._classesListWidget()),_st((smalltalk.HLVerticalSplitter || HLVerticalSplitter))._with_with_(_st(self)._protocolsListWidget(),_st(self)._methodsListWidget())),_st(self)._sourceWidget())));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLBrowser)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: (HLContainer with: (HLHorizontalSplitter \x0a    \x09with: (HLVerticalSplitter\x0a        \x09with: (HLVerticalSplitter\x0a            \x09with: self packagesListWidget\x0a                with: self classesListWidget)\x0a            with: (HLVerticalSplitter\x0a            \x09with: self protocolsListWidget\x0a                with: self methodsListWidget)) \x0a        with: self sourceWidget))",
messageSends: ["with:", "with:with:", "packagesListWidget", "classesListWidget", "protocolsListWidget", "methodsListWidget", "sourceWidget"],
referencedClasses: ["HLVerticalSplitter", "HLHorizontalSplitter", "HLContainer"]
}),
smalltalk.HLBrowser);

smalltalk.addMethod(
"_sourceWidget",
smalltalk.method({
selector: "sourceWidget",
category: 'widgets',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@sourceWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@sourceWidget"]=_st((smalltalk.HLBrowserSourceWidget || HLBrowserSourceWidget))._on_(_st(self)._model());
$1=self["@sourceWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceWidget",{}, smalltalk.HLBrowser)})},
args: [],
source: "sourceWidget\x0a\x09^ sourceWidget ifNil: [\x0a      \x09sourceWidget := HLBrowserSourceWidget on: self model ]",
messageSends: ["ifNil:", "on:", "model"],
referencedClasses: ["HLBrowserSourceWidget"]
}),
smalltalk.HLBrowser);


smalltalk.HLBrowser.klass.iVarNames = ['nextId'];
smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return true;
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLBrowser.klass)})},
args: [],
source: "canBeOpenAsTab\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_nextId",
smalltalk.method({
selector: "nextId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@nextId"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nextId"]=(0);
self["@nextId"];
} else {
$1;
};
$2=_st("browser_").__comma(_st(_st(self["@nextId"]).__plus((1)))._asString());
return $2;
}, function($ctx1) {$ctx1.fill(self,"nextId",{}, smalltalk.HLBrowser.klass)})},
args: [],
source: "nextId\x0a\x09nextId ifNil: [ nextId := 0 ].\x0a    ^ 'browser_', (nextId + 1) asString",
messageSends: ["ifNil:", ",", "asString", "+"],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Browser";
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLBrowser.klass)})},
args: [],
source: "tabLabel\x0a\x09^ 'Browser'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return (0);
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLBrowser.klass)})},
args: [],
source: "tabPriority\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowser.klass);


smalltalk.addClass('HLBrowserListWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Browser');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLBrowserListWidget)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aBrowserModel;
_st(self)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserListWidget)})},
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel.\x0a    \x0a    self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLBrowserListWidget)})},
args: [],
source: "observeModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aModel:aModel}, smalltalk.HLBrowserListWidget.klass)})},
args: ["aModel"],
source: "on: aModel\x0a\x09^ self new \x0a    \x09model: aModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserListWidget.klass);


smalltalk.addClass('HLClassesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_focusMethodsListWidget",
smalltalk.method({
selector: "focusMethodsListWidget",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._announce_(_st((smalltalk.HLMethodsListFocus || HLMethodsListFocus))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusMethodsListWidget",{}, smalltalk.HLClassesListWidget)})},
args: [],
source: "focusMethodsListWidget\x0a\x09self model announcer announce: HLMethodsListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLMethodsListFocus"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_focusProtocolsListWidget",
smalltalk.method({
selector: "focusProtocolsListWidget",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._announce_(_st((smalltalk.HLProtocolsListFocus || HLProtocolsListFocus))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusProtocolsListWidget",{}, smalltalk.HLClassesListWidget)})},
args: [],
source: "focusProtocolsListWidget\x0a\x09self model announcer announce: HLProtocolsListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLProtocolsListFocus"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_getChildrenOf_",
smalltalk.method({
selector: "getChildrenOf:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._items())._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(each)._superclass()).__eq(aClass);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getChildrenOf:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "getChildrenOf: aClass\x0a\x09^ self items select: [ :each | each superclass = aClass ]",
messageSends: ["select:", "=", "superclass", "items"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_getRootClassesOf_",
smalltalk.method({
selector: "getRootClassesOf:",
category: 'accessing',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(aCollection)._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(aCollection)._includes_(_st(each)._superclass()))._not();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"getRootClassesOf:",{aCollection:aCollection}, smalltalk.HLClassesListWidget)})},
args: ["aCollection"],
source: "getRootClassesOf: aCollection\x0a\x09^ aCollection select: [ :each |\x0a    \x09\x09(aCollection includes: each superclass) not ]",
messageSends: ["select:", "not", "includes:", "superclass"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(_st(_st(aClass)._theNonMetaClass())._comment())._isEmpty();
if(smalltalk.assert($2)){
$1="icon-question-sign";
} else {
$1="icon-none";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "iconForItem: aClass\x0a\x09^ aClass theNonMetaClass comment isEmpty\x0a    \x09ifFalse: [ 'icon-none' ]\x0a      \x09ifTrue: [ 'icon-question-sign' ]",
messageSends: ["ifFalse:ifTrue:", "isEmpty", "comment", "theNonMetaClass"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._model())._announcer();
_st($1)._on_do_((smalltalk.HLPackageSelected || HLPackageSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onPackageSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st($1)._on_do_((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onShowInstanceToggled();
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLClassesListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer \x0a    \x09on: HLPackageSelected do: [ :ann | self onPackageSelected: ann item ];\x0a    \x09on: HLShowInstanceToggled do: [ :ann | self onShowInstanceToggled ];\x0a\x09\x09on: HLClassSelected do: [ :ann | self onClassSelected: ann item ]",
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model", "onShowInstanceToggled", "onClassSelected:"],
referencedClasses: ["HLPackageSelected", "HLShowInstanceToggled", "HLClassSelected"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._selectedItem_(aClass);
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "onClassSelected: aClass\x0a\x09self selectedItem: aClass.\x0a\x09aClass ifNil: [ ^ self ].\x0a    \x0a    self focus",
messageSends: ["selectedItem:", "ifNil:", "focus"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
category: 'reactions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
_st(self)._selectedItem_(nil);
$1=self;
$3=aPackage;
if(($receiver = $3) == nil || $receiver == undefined){
$2=[];
} else {
$2=_st(_st(_st(_st(aPackage)._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._theNonMetaClass();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})})))._asSet())._asArray();
};
_st($1)._items_($2);
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{aPackage:aPackage}, smalltalk.HLClassesListWidget)})},
args: ["aPackage"],
source: "onPackageSelected: aPackage\x0a    self selectedItem: nil.\x0a    \x0a    self items: (aPackage \x0a    \x09ifNil: [ #() ]\x0a  \x09\x09ifNotNil: [ (aPackage classes \x0a        \x09collect: [ :each | each theNonMetaClass ]) asSet asArray ]).\x0a\x0a    self refresh",
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "asArray", "asSet", "collect:", "theNonMetaClass", "classes", "refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_onShowInstanceToggled",
smalltalk.method({
selector: "onShowInstanceToggled",
category: 'reactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onShowInstanceToggled",{}, smalltalk.HLClassesListWidget)})},
args: [],
source: "onShowInstanceToggled\x0a\x09self refresh",
messageSends: ["refresh"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$7,$8,$2,$9,$10;
$1=_st(html)._div();
_st($1)._class_("btn-group");
_st($1)._at_put_("data-toggle","buttons-radio");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._button();
_st($3)._class_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {_st(str)._nextPutAll_("btn");
$4=_st(self)._showInstance();
if(smalltalk.assert($4)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
_st($3)._with_("Instance");
$5=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._showInstance_(true);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$5;
$6=_st(html)._button();
_st($6)._class_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {_st(str)._nextPutAll_("btn");
$7=_st(_st(self)._model())._showInstance();
if(! smalltalk.assert($7)){
return _st(str)._nextPutAll_(" active");
};
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
_st($6)._with_("Class");
$8=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(self)._model())._showInstance_(false);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._button();
_st($9)._class_("btn");
_st($9)._at_put_("data-toggle","button");
$10=_st($9)._with_("Comment");
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html}, smalltalk.HLClassesListWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html div \x0a        class: 'btn-group';\x0a\x09\x09at: 'data-toggle' put: 'buttons-radio';\x0a\x09\x09with: [ \x0a           \x09html button \x0a                class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self showInstance ifTrue: [ \x0a                    \x09str nextPutAll: ' active'] ]);\x0a  \x09\x09\x09\x09with: 'Instance';\x0a                onClick: [ self showInstance: true ].\x0a  \x09\x09\x09html button\x0a  \x09\x09\x09\x09class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn'.\x0a                    self model showInstance ifFalse: [ \x0a                    \x09str nextPutAll: ' active'] ]);\x0a  \x09\x09\x09\x09with: 'Class';\x0a\x09\x09\x09\x09onClick: [ self model showInstance: false ] ].\x0a                 \x0a  \x09html button \x0a           \x09class: 'btn';\x0a            at: 'data-toggle' put: 'button';\x0a  \x09\x09\x09with: 'Comment'",
messageSends: ["class:", "div", "at:put:", "with:", "streamContents:", "nextPutAll:", "ifTrue:", "showInstance", "button", "onClick:", "showInstance:", "ifFalse:", "model"],
referencedClasses: ["String"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItem_level_on_",
smalltalk.method({
selector: "renderItem:level:on:",
category: 'rendering',
fn: function (aClass,anInteger,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
li=_st(html)._li();
$1=li;
_st($1)._at_put_("list-data",_st(_st(self)._items())._indexOf_(aClass));
_st($1)._class_(_st(self)._cssClassForItem_(aClass));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._a();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {_st(_st(html)._tag_("i"))._class_(_st(self)._iconForItem_(aClass));
return _st(self)._renderItemLabel_level_on_(aClass,anInteger,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._activateListItem_(_st(li)._asJQuery());
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderItem_level_on_(each,_st(anInteger).__plus((1)),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:level:on:",{aClass:aClass,anInteger:anInteger,html:html,li:li}, smalltalk.HLClassesListWidget)})},
args: ["aClass", "anInteger", "html"],
source: "renderItem: aClass level: anInteger on: html\x0a\x09| li |\x0a    \x0a\x09li := html li.\x0a    li\x0a    \x09at: 'list-data' put: (self items indexOf: aClass);\x0a    \x09class: (self cssClassForItem: aClass);\x0a        with: [ \x0a        \x09html a\x0a            \x09with: [ \x0a            \x09\x09(html tag: 'i') class: (self iconForItem: aClass).\x0a  \x09\x09\x09\x09\x09self renderItemLabel: aClass level: anInteger on: html ];\x0a\x09\x09\x09\x09onClick: [\x0a                  \x09self activateListItem: li asJQuery ] ].\x0a                    \x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: anInteger + 1 on: html ]",
messageSends: ["li", "at:put:", "indexOf:", "items", "class:", "cssClassForItem:", "with:", "iconForItem:", "tag:", "renderItemLabel:level:on:", "a", "onClick:", "activateListItem:", "asJQuery", "do:", "renderItem:level:on:", "+", "getChildrenOf:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItem_on_",
smalltalk.method({
selector: "renderItem:on:",
category: 'rendering',
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.HLBrowserListWidget.fn.prototype._renderItem_on_.apply(_st(self), [aClass,html]);
_st(_st(self)._getChildrenOf_(aClass))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderItem_level_on_(each,(1),html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{aClass:aClass,html:html}, smalltalk.HLClassesListWidget)})},
args: ["aClass", "html"],
source: "renderItem: aClass on: html\x0a\x09super renderItem: aClass on: html.\x0a    (self getChildrenOf: aClass) do: [ :each |\x0a    \x09self renderItem: each level: 1 on: html ]",
messageSends: ["renderItem:on:", "do:", "renderItem:level:on:", "getChildrenOf:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItemLabel_level_on_",
smalltalk.method({
selector: "renderItemLabel:level:on:",
category: 'rendering',
fn: function (aClass,anInteger,html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(html)._span())._asJQuery())._html_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {_st(anInteger)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {return _st(str)._nextPutAll_("&nbsp;&nbsp;&nbsp;&nbsp;");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(str)._nextPutAll_(_st(aClass)._name());
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:level:on:",{aClass:aClass,anInteger:anInteger,html:html}, smalltalk.HLClassesListWidget)})},
args: ["aClass", "anInteger", "html"],
source: "renderItemLabel: aClass level: anInteger on: html\x0a\x09html span asJQuery html: (String streamContents: [ :str |\x0a\x09\x09anInteger timesRepeat: [\x0a\x09\x09\x09str nextPutAll: '&nbsp;&nbsp;&nbsp;&nbsp;'].\x0a\x09\x09\x09str nextPutAll: aClass name ])",
messageSends: ["html:", "streamContents:", "timesRepeat:", "nextPutAll:", "name", "asJQuery", "span"],
referencedClasses: ["String"]
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (aClass,html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderItemLabel_level_on_(aClass,(0),html);
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aClass:aClass,html:html}, smalltalk.HLClassesListWidget)})},
args: ["aClass", "html"],
source: "renderItemLabel: aClass on: html\x0a\x09self renderItemLabel: aClass level: 0 on: html",
messageSends: ["renderItemLabel:level:on:"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_renderListOn_",
smalltalk.method({
selector: "renderListOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._getRootClassesOf_(_st(self)._items()))._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderListOn:",{html:html}, smalltalk.HLClassesListWidget)})},
args: ["html"],
source: "renderListOn: html\x0a\x09(self getRootClassesOf: self items)\x0a    \x09do: [ :each | self renderItem: each on: html ]",
messageSends: ["do:", "renderItem:on:", "getRootClassesOf:", "items"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._selectedClass_(aClass);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aClass:aClass}, smalltalk.HLClassesListWidget)})},
args: ["aClass"],
source: "selectItem: aClass\x0a    self model selectedClass: aClass",
messageSends: ["selectedClass:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_showInstance",
smalltalk.method({
selector: "showInstance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._showInstance();
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{}, smalltalk.HLClassesListWidget)})},
args: [],
source: "showInstance\x0a\x09^ self model showInstance",
messageSends: ["showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);

smalltalk.addMethod(
"_showInstance_",
smalltalk.method({
selector: "showInstance:",
category: 'actions',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._showInstance_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean}, smalltalk.HLClassesListWidget)})},
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x09self model showInstance: aBoolean",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLClassesListWidget);



smalltalk.addClass('HLMethodsListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{}, smalltalk.HLMethodsListWidget)})},
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
messageSends: ["allProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_flushSelectorsCache",
smalltalk.method({
selector: "flushSelectorsCache",
category: 'cache',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectorsCache"]=_st((smalltalk.Dictionary || Dictionary))._new();
return self}, function($ctx1) {$ctx1.fill(self,"flushSelectorsCache",{}, smalltalk.HLMethodsListWidget)})},
args: [],
source: "flushSelectorsCache\x0a\x09selectorsCache := Dictionary new",
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_iconForItem_",
smalltalk.method({
selector: "iconForItem:",
category: 'accessing',
fn: function (aCompiledMethod){
var self=this;
var override,overriden;
return smalltalk.withContext(function($ctx1) { var $2,$3,$4,$1;
override=_st(self)._isOverride_(aCompiledMethod);
overriden=_st(self)._isOverridden_(aCompiledMethod);
$2=override;
if(smalltalk.assert($2)){
$3=overriden;
if(smalltalk.assert($3)){
$1="icon-resize-vertical";
} else {
$1="icon-arrow-up";
};
} else {
$4=overriden;
if(smalltalk.assert($4)){
$1="icon-arrow-down";
} else {
$1="icon-none";
};
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"iconForItem:",{aCompiledMethod:aCompiledMethod,override:override,overriden:overriden}, smalltalk.HLMethodsListWidget)})},
args: ["aCompiledMethod"],
source: "iconForItem: aCompiledMethod\x0a\x09| override overriden |\x0a    \x0a    override := self isOverride: aCompiledMethod.\x0a    overriden := self isOverridden: aCompiledMethod.\x0a    \x0a\x09^ override\x0a    \x09ifTrue: [ overriden\x0a\x09\x09\x09ifTrue: [ 'icon-resize-vertical' ]\x0a\x09\x09\x09ifFalse: [ 'icon-arrow-up' ] ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09overriden\x0a\x09\x09\x09ifTrue: [ 'icon-arrow-down' ]\x0a\x09\x09\x09ifFalse: [ 'icon-none' ] ]",
messageSends: ["isOverride:", "isOverridden:", "ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.HLBrowserListWidget.fn.prototype._initialize.apply(_st(self), []);
_st(self)._flushSelectorsCache();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.HLMethodsListWidget)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self flushSelectorsCache",
messageSends: ["initialize", "flushSelectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_isOverridden_",
smalltalk.method({
selector: "isOverridden:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selectorsCache())._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod}, smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a   ^ self selectorsCache isOverridden: aMethod",
messageSends: ["isOverridden:", "selectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_isOverride_",
smalltalk.method({
selector: "isOverride:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._selectorsCache())._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod}, smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a   ^ self selectorsCache isOverride: aMethod",
messageSends: ["isOverride:", "selectorsCache"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_methodsInProtocol_",
smalltalk.method({
selector: "methodsInProtocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(aString).__eq(_st(self)._allProtocol());
if(smalltalk.assert($2)){
$1=_st(_st(_st(self)._model())._selectedClass())._methods();
} else {
$1=_st(_st(_st(self)._model())._selectedClass())._methodsInProtocol_(aString);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString}, smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09^ aString = self allProtocol\x0a    \x09ifTrue: [ self model selectedClass methods ]\x0a      \x09ifFalse: [ self model selectedClass methodsInProtocol: aString ]",
messageSends: ["ifTrue:ifFalse:", "methods", "selectedClass", "model", "methodsInProtocol:", "=", "allProtocol"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(nil);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLMethodSelected || HLMethodSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLMethodsListWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer on: HLProtocolSelected do: [ :ann |\x0a    \x09self onProtocolSelected: ann item ].\x0a    self model announcer on: HLShowInstanceToggled do: [ :ann |\x0a    \x09self onProtocolSelected: nil ].\x0a    self model announcer on: HLMethodSelected do: [ :ann |\x0a    \x09self onMethodSelected: ann item ]",
messageSends: ["on:do:", "onProtocolSelected:", "item", "announcer", "model", "onMethodSelected:"],
referencedClasses: ["HLProtocolSelected", "HLShowInstanceToggled", "HLMethodSelected"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
category: 'reactions',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._selectedItem_(aMethod);
$1=aMethod;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aMethod:aMethod}, smalltalk.HLMethodsListWidget)})},
args: ["aMethod"],
source: "onMethodSelected: aMethod\x0a\x09self selectedItem: aMethod.\x0a\x09aMethod ifNil: [ ^ self ].\x0a    \x0a    self focus",
messageSends: ["selectedItem:", "ifNil:", "focus"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
_st(self)._selectedItem_(nil);
$1=self;
$3=_st(_st(self)._model())._selectedClass();
if(($receiver = $3) == nil || $receiver == undefined){
$2=[];
} else {
$4=aString;
if(($receiver = $4) == nil || $receiver == undefined){
$2=[];
} else {
$2=_st(self)._methodsInProtocol_(aString);
};
};
_st($1)._items_($2);
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString}, smalltalk.HLMethodsListWidget)})},
args: ["aString"],
source: "onProtocolSelected: aString\x0a    self selectedItem: nil.\x0a    \x0a    self items: (self model selectedClass \x0a    \x09ifNil: [ #() ]\x0a      \x09ifNotNil: [ aString\x0a    \x09\x09ifNil: [ #() ]\x0a      \x09\x09ifNotNil: [ self methodsInProtocol: aString ] ]).\x0a        \x0a    self refresh",
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "methodsInProtocol:", "selectedClass", "model", "refresh"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_overrideSelectors",
smalltalk.method({
selector: "overrideSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st(_st(self)._selectorsCache())._at_ifAbsentPut_("override",(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(_st(self)._model())._selectedClass())._allSuperclasses())._inject_into_(_st((smalltalk.Set || Set))._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {$2=acc;
_st($2)._addAll_(_st(each)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideSelectors",{}, smalltalk.HLMethodsListWidget)})},
args: [],
source: "overrideSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'override'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSuperclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSuperclasses", "selectedClass", "model", "selectorsCache"],
referencedClasses: ["Set"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_overridenSelectors",
smalltalk.method({
selector: "overridenSelectors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st(_st(self)._selectorsCache())._at_ifAbsentPut_("overriden",(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(_st(self)._model())._selectedClass())._allSubclasses())._inject_into_(_st((smalltalk.Set || Set))._new(),(function(acc,each){
return smalltalk.withContext(function($ctx3) {$2=acc;
_st($2)._addAll_(_st(each)._selectors());
$3=_st($2)._yourself();
return $3;
}, function($ctx3) {$ctx3.fillBlock({acc:acc,each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"overridenSelectors",{}, smalltalk.HLMethodsListWidget)})},
args: [],
source: "overridenSelectors\x0a\x09^ self selectorsCache \x0a    \x09at: 'overriden'\x0a        ifAbsentPut: [ \x0a        \x09self model selectedClass allSubclasses\x0a\x09\x09\x09\x09inject: Set new into: [ :acc :each | acc addAll: each selectors; yourself ] ]",
messageSends: ["at:ifAbsentPut:", "inject:into:", "new", "addAll:", "selectors", "yourself", "allSubclasses", "selectedClass", "model", "selectorsCache"],
referencedClasses: ["Set"]
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLBrowserListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.HLBrowserListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLMethodsListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ].\x0a        \x0a    \x22self flushSelectorsCache\x22",
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_renderItemLabel_on_",
smalltalk.method({
selector: "renderItemLabel:on:",
category: 'rendering',
fn: function (aCompiledMethod,html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(html)._with_(_st(aCompiledMethod)._selector());
return self}, function($ctx1) {$ctx1.fill(self,"renderItemLabel:on:",{aCompiledMethod:aCompiledMethod,html:html}, smalltalk.HLMethodsListWidget)})},
args: ["aCompiledMethod", "html"],
source: "renderItemLabel: aCompiledMethod on: html\x0a\x09html with: aCompiledMethod selector",
messageSends: ["with:", "selector"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._selectedMethod_(aCompiledMethod);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aCompiledMethod:aCompiledMethod}, smalltalk.HLMethodsListWidget)})},
args: ["aCompiledMethod"],
source: "selectItem: aCompiledMethod\x0a   \x09self model selectedMethod: aCompiledMethod",
messageSends: ["selectedMethod:", "model"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);

smalltalk.addMethod(
"_selectorsCache",
smalltalk.method({
selector: "selectorsCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._class())._selectorsCache();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{}, smalltalk.HLMethodsListWidget)})},
args: [],
source: "selectorsCache\x0a\x09^ self class selectorsCache",
messageSends: ["selectorsCache", "class"],
referencedClasses: []
}),
smalltalk.HLMethodsListWidget);


smalltalk.HLMethodsListWidget.klass.iVarNames = ['selectorsCache'];
smalltalk.addMethod(
"_selectorsCache",
smalltalk.method({
selector: "selectorsCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLSelectorsCache || HLSelectorsCache))._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectorsCache",{}, smalltalk.HLMethodsListWidget.klass)})},
args: [],
source: "selectorsCache\x0a\x09^ HLSelectorsCache current",
messageSends: ["current"],
referencedClasses: ["HLSelectorsCache"]
}),
smalltalk.HLMethodsListWidget.klass);


smalltalk.addClass('HLPackagesListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_focusClassesListWidget",
smalltalk.method({
selector: "focusClassesListWidget",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._announce_(_st((smalltalk.HLClassesListFocus || HLClassesListFocus))._new());
return self}, function($ctx1) {$ctx1.fill(self,"focusClassesListWidget",{}, smalltalk.HLPackagesListWidget)})},
args: [],
source: "focusClassesListWidget\x0a\x09self model announcer announce: HLClassesListFocus new",
messageSends: ["announce:", "new", "announcer", "model"],
referencedClasses: ["HLClassesListFocus"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_initializeItems",
smalltalk.method({
selector: "initializeItems",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@items"]=_st(_st(_st(self)._model())._packages())._sort_((function(a,b){
return smalltalk.withContext(function($ctx2) {return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
$1=self["@items"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeItems",{}, smalltalk.HLPackagesListWidget)})},
args: [],
source: "initializeItems\x0a\x09^ items := self model packages sort:[:a :b|\x0a\x09\x09\x09\x09\x09\x09a name < b name]",
messageSends: ["sort:", "<", "name", "packages", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_items",
smalltalk.method({
selector: "items",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@items"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._initializeItems();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"items",{}, smalltalk.HLPackagesListWidget)})},
args: [],
source: "items\x0a\x09^ items ifNil: [self initializeItems]",
messageSends: ["ifNil:", "initializeItems"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLPackageSelected || HLPackageSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onPackageSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLPackagesListWidget)})},
args: [],
source: "observeModel\x0a    self model announcer on: HLPackageSelected do: [ :ann |\x0a    \x09self onPackageSelected: ann item ]",
messageSends: ["on:do:", "onPackageSelected:", "item", "announcer", "model"],
referencedClasses: ["HLPackageSelected"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_onPackageSelected_",
smalltalk.method({
selector: "onPackageSelected:",
category: 'reactions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedItem_(aPackage);
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onPackageSelected:",{aPackage:aPackage}, smalltalk.HLPackagesListWidget)})},
args: ["aPackage"],
source: "onPackageSelected: aPackage\x0a\x09self selectedItem: aPackage.\x0a\x09self focus",
messageSends: ["selectedItem:", "focus"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$5,$6,$7,$8,$4,$9,$10;
$1=_st(html)._span();
_st($1)._class_("info");
$2=_st($1)._with_("Auto commit");
$3=_st(html)._div();
_st($3)._class_("btn-group switch");
_st($3)._at_put_("data-toggle","buttons-radio");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {$5=_st(html)._button();
_st($5)._class_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {return _st(str)._nextPutAll_("btn");
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
$6=_st($5)._with_("On");
$6;
$7=_st(html)._button();
_st($7)._class_(_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx3) {return _st(str)._nextPutAll_("btn active");
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx1)})})));
$8=_st($7)._with_("Off");
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$9=_st(html)._a();
_st($9)._class_("btn");
$10=_st($9)._with_("Commit");
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html}, smalltalk.HLPackagesListWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x0a\x09html span class: 'info'; with: 'Auto commit'.\x0a\x09html div \x0a        class: 'btn-group switch';\x0a\x09\x09at: 'data-toggle' put: 'buttons-radio';\x0a\x09\x09with: [ \x0a           \x09html button \x0a                class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn' ]);\x0a  \x09\x09\x09\x09with: 'On'.\x0a  \x09\x09\x09html button\x0a  \x09\x09\x09\x09class: (String streamContents: [ :str |\x0a                \x09str nextPutAll: 'btn active' ]);\x0a  \x09\x09\x09\x09with: 'Off' ].\x0a                \x0a    html a \x0a         \x09class: 'btn';\x0a\x09\x09\x09with: 'Commit'.",
messageSends: ["class:", "span", "with:", "div", "at:put:", "streamContents:", "nextPutAll:", "button", "a"],
referencedClasses: ["String"]
}),
smalltalk.HLPackagesListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._selectedPackage_(aPackage);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aPackage:aPackage}, smalltalk.HLPackagesListWidget)})},
args: ["aPackage"],
source: "selectItem: aPackage\x0a\x09self model selectedPackage: aPackage",
messageSends: ["selectedPackage:", "model"],
referencedClasses: []
}),
smalltalk.HLPackagesListWidget);



smalltalk.addClass('HLProtocolsListWidget', smalltalk.HLBrowserListWidget, [], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._model())._allProtocol();
return $1;
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{}, smalltalk.HLProtocolsListWidget)})},
args: [],
source: "allProtocol\x0a\x09^ self model allProtocol",
messageSends: ["allProtocol", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(_st(self)._model())._selectedClass());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLProtocolsListWidget)})},
args: [],
source: "observeModel\x0a    self model announcer on: HLClassSelected do: [ :ann |\x0a    \x09self onClassSelected: ann item ].\x0a    self model announcer on: HLShowInstanceToggled do: [ :ann |\x0a    \x09self onClassSelected: self model selectedClass ].\x0a    self model announcer on: HLProtocolSelected do: [ :ann |\x0a    \x09self onProtocolSelected: ann item ]",
messageSends: ["on:do:", "onClassSelected:", "item", "announcer", "model", "selectedClass", "onProtocolSelected:"],
referencedClasses: ["HLClassSelected", "HLShowInstanceToggled", "HLProtocolSelected"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$2;
_st(self)._selectedItem_(nil);
$1=self;
$3=aClass;
if(($receiver = $3) == nil || $receiver == undefined){
$2=_st((smalltalk.Array || Array))._with_(_st(self)._allProtocol());
} else {
$4=_st((smalltalk.Array || Array))._with_(_st(self)._allProtocol());
_st($4)._addAll_(_st(aClass)._protocols());
$5=_st($4)._yourself();
$2=$5;
};
_st($1)._items_($2);
_st(self)._refresh();
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass}, smalltalk.HLProtocolsListWidget)})},
args: ["aClass"],
source: "onClassSelected: aClass\x0a    self selectedItem: nil.\x0a    \x0a    self items: (aClass\x0a    \x09ifNil: [ Array with: self allProtocol ]\x0a      \x09ifNotNil: [ \x0a        \x09(Array with: self allProtocol) \x0a            \x09addAll: aClass protocols; \x0a                yourself ]).\x0a\x0a    self refresh",
messageSends: ["selectedItem:", "items:", "ifNil:ifNotNil:", "with:", "allProtocol", "addAll:", "protocols", "yourself", "refresh"],
referencedClasses: ["Array"]
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(self)._selectedItem_(aString);
$1=aString;
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self)._focus();
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString}, smalltalk.HLProtocolsListWidget)})},
args: ["aString"],
source: "onProtocolSelected: aString\x0a\x09self selectedItem: aString.\x0a\x09aString ifNil: [ ^ self ].\x0a    \x0a    self focus",
messageSends: ["selectedItem:", "ifNil:", "focus"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st(_st(self)._model())._showInstance();
if(smalltalk.assert($1)){
smalltalk.HLBrowserListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
} else {
$2=_st(html)._div();
_st($2)._class_("class_side");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {return smalltalk.HLBrowserListWidget.fn.prototype._renderContentOn_.apply(_st(self), [html]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLProtocolsListWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self model showInstance\x0a    \x09ifFalse: [ html div \x0a        \x09class: 'class_side'; \x0a            with: [ super renderContentOn: html ] ]\x0a      \x09ifTrue: [ super renderContentOn: html ]",
messageSends: ["ifFalse:ifTrue:", "class:", "div", "with:", "renderContentOn:", "showInstance", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
category: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._selectedProtocol_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{aString:aString}, smalltalk.HLProtocolsListWidget)})},
args: ["aString"],
source: "selectItem: aString\x0a    self model selectedProtocol: aString",
messageSends: ["selectedProtocol:", "model"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);

smalltalk.addMethod(
"_selectedItem",
smalltalk.method({
selector: "selectedItem",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HLBrowserListWidget.fn.prototype._selectedItem.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{}, smalltalk.HLProtocolsListWidget)})},
args: [],
source: "selectedItem\x0a\x09^ super selectedItem\x22 ifNil: [ self allProtocol ]\x22",
messageSends: ["selectedItem"],
referencedClasses: []
}),
smalltalk.HLProtocolsListWidget);



smalltalk.addClass('HLBrowserModel', smalltalk.Object, ['announcer', 'environment', 'selectedPackage', 'selectedClass', 'selectedProtocol', 'selectedMethod', 'showInstance', 'showComment'], 'Helios-Browser');
smalltalk.addMethod(
"_allProtocol",
smalltalk.method({
selector: "allProtocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "-- All --";
}, function($ctx1) {$ctx1.fill(self,"allProtocol",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "allProtocol\x0a\x09^ '-- All --'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "announcer\x0a\x09^ announcer ifNil: [ announcer := Announcer new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st((smalltalk.HLManager || HLManager))._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "environment\x0a\x09^ environment ifNil: [ HLManager current environment ]",
messageSends: ["ifNil:", "environment", "current"],
referencedClasses: ["HLManager"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
category: 'accessing',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@environment"]=anEnvironment;
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLBrowserModel)})},
args: ["anEnvironment"],
source: "environment: anEnvironment\x0a\x09environment := anEnvironment",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._environment())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "packages\x0a\x09^ self environment packages",
messageSends: ["packages", "environment"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedClass",
smalltalk.method({
selector: "selectedClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedClass",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "selectedClass\x0a\x09^ selectedClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedClass_",
smalltalk.method({
selector: "selectedClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(self["@selectedClass"]).__eq(aClass);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=aClass;
if(($receiver = $3) == nil || $receiver == undefined){
self["@selectedClass"]=nil;
self["@selectedClass"];
} else {
$4=_st(self)._showInstance();
if(smalltalk.assert($4)){
self["@selectedClass"]=_st(aClass)._theNonMetaClass();
self["@selectedClass"];
} else {
self["@selectedClass"]=_st(aClass)._theMetaClass();
self["@selectedClass"];
};
};
_st(self)._selectedProtocol_(nil);
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLClassSelected || HLClassSelected))._on_(_st(self)._selectedClass()));
return self}, function($ctx1) {$ctx1.fill(self,"selectedClass:",{aClass:aClass}, smalltalk.HLBrowserModel)})},
args: ["aClass"],
source: "selectedClass: aClass\x0a\x09selectedClass = aClass ifTrue: [ ^ self ].\x0a    \x0a\x09aClass \x0a   \x09\x09ifNil: [ selectedClass := nil ]\x0a    \x09ifNotNil: [\x0a\x09\x09\x09self showInstance \x0a   \x09\x09\x09\x09ifTrue: [ selectedClass := aClass theNonMetaClass ]\x0a     \x09\x09\x09ifFalse: [ selectedClass := aClass theMetaClass ] ].\x0a\x09self selectedProtocol: nil.\x0a\x09self announcer announce: (HLClassSelected on: self selectedClass)",
messageSends: ["ifTrue:", "=", "ifNil:ifNotNil:", "ifTrue:ifFalse:", "theNonMetaClass", "theMetaClass", "showInstance", "selectedProtocol:", "announce:", "on:", "selectedClass", "announcer"],
referencedClasses: ["HLClassSelected"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod",
smalltalk.method({
selector: "selectedMethod",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedMethod"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedMethod",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "selectedMethod\x0a\x09^ selectedMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedMethod_",
smalltalk.method({
selector: "selectedMethod:",
category: 'accessing',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self["@selectedMethod"]).__eq(aCompiledMethod);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@selectedMethod"]=aCompiledMethod;
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLMethodSelected || HLMethodSelected))._on_(aCompiledMethod));
return self}, function($ctx1) {$ctx1.fill(self,"selectedMethod:",{aCompiledMethod:aCompiledMethod}, smalltalk.HLBrowserModel)})},
args: ["aCompiledMethod"],
source: "selectedMethod: aCompiledMethod\x0a\x09selectedMethod = aCompiledMethod ifTrue: [ ^ self ].\x0a\x0a\x09selectedMethod := aCompiledMethod.    \x0a    self announcer announce: (HLMethodSelected on: aCompiledMethod)",
messageSends: ["ifTrue:", "=", "announce:", "on:", "announcer"],
referencedClasses: ["HLMethodSelected"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedPackage",
smalltalk.method({
selector: "selectedPackage",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedPackage"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedPackage",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "selectedPackage\x0a\x09^ selectedPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedPackage_",
smalltalk.method({
selector: "selectedPackage:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self["@selectedPackage"]).__eq(aPackage);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@selectedPackage"]=aPackage;
_st(self)._selectedClass_(nil);
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLPackageSelected || HLPackageSelected))._on_(aPackage));
return self}, function($ctx1) {$ctx1.fill(self,"selectedPackage:",{aPackage:aPackage}, smalltalk.HLBrowserModel)})},
args: ["aPackage"],
source: "selectedPackage: aPackage\x0a\x09selectedPackage = aPackage ifTrue: [ ^ self ].\x0a    \x0a\x09selectedPackage := aPackage.\x0a\x09self selectedClass: nil.\x0a    self announcer announce: (HLPackageSelected on: aPackage)",
messageSends: ["ifTrue:", "=", "selectedClass:", "announce:", "on:", "announcer"],
referencedClasses: ["HLPackageSelected"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedProtocol",
smalltalk.method({
selector: "selectedProtocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedProtocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedProtocol",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "selectedProtocol\x0a\x09^ selectedProtocol",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_selectedProtocol_",
smalltalk.method({
selector: "selectedProtocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self["@selectedProtocol"]).__eq(aString);
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self["@selectedProtocol"]=aString;
_st(self)._selectedMethod_(nil);
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLProtocolSelected || HLProtocolSelected))._on_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"selectedProtocol:",{aString:aString}, smalltalk.HLBrowserModel)})},
args: ["aString"],
source: "selectedProtocol: aString\x0a\x09selectedProtocol = aString ifTrue: [ ^ self ].\x0a    \x0a\x09selectedProtocol := aString.\x0a    self selectedMethod: nil.\x0a    self announcer announce: (HLProtocolSelected on: aString)",
messageSends: ["ifTrue:", "=", "selectedMethod:", "announce:", "on:", "announcer"],
referencedClasses: ["HLProtocolSelected"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showComment",
smalltalk.method({
selector: "showComment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@showComment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showComment",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "showComment\x0a\x09^ showComment ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showComment_",
smalltalk.method({
selector: "showComment:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@showComment"]=aBoolean;
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLShowCommentToggled || HLShowCommentToggled))._new());
return self}, function($ctx1) {$ctx1.fill(self,"showComment:",{aBoolean:aBoolean}, smalltalk.HLBrowserModel)})},
args: ["aBoolean"],
source: "showComment: aBoolean\x0a\x09showComment := aBoolean.\x0a    \x0a    self announcer announce: HLShowCommentToggled new",
messageSends: ["announce:", "new", "announcer"],
referencedClasses: ["HLShowCommentToggled"]
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showInstance",
smalltalk.method({
selector: "showInstance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@showInstance"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=true;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"showInstance",{}, smalltalk.HLBrowserModel)})},
args: [],
source: "showInstance\x0a\x09^ showInstance ifNil: [ true ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HLBrowserModel);

smalltalk.addMethod(
"_showInstance_",
smalltalk.method({
selector: "showInstance:",
category: 'accessing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3;
self["@showInstance"]=aBoolean;
$1=_st(self)._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self;
$4=aBoolean;
if(smalltalk.assert($4)){
$3=_st(_st(self)._selectedClass())._theNonMetaClass();
} else {
$3=_st(_st(self)._selectedClass())._theMetaClass();
};
_st($2)._selectedClass_($3);
};
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLShowInstanceToggled || HLShowInstanceToggled))._new());
return self}, function($ctx1) {$ctx1.fill(self,"showInstance:",{aBoolean:aBoolean}, smalltalk.HLBrowserModel)})},
args: ["aBoolean"],
source: "showInstance: aBoolean\x0a\x09showInstance := aBoolean.\x0a    \x0a    self selectedClass ifNotNil: [\x0a    \x09self selectedClass: (aBoolean\x0a    \x09\x09ifTrue: [self selectedClass theNonMetaClass ]\x0a    \x09  \x09ifFalse: [ self selectedClass theMetaClass ]) ].\x0a    \x0a    self announcer announce: HLShowInstanceToggled new",
messageSends: ["ifNotNil:", "selectedClass:", "ifTrue:ifFalse:", "theNonMetaClass", "selectedClass", "theMetaClass", "announce:", "new", "announcer"],
referencedClasses: ["HLShowInstanceToggled"]
}),
smalltalk.HLBrowserModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'actions',
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment}, smalltalk.HLBrowserModel.klass)})},
args: ["anEnvironment"],
source: "on: anEnvironment\x0a\x0a\x09^ self new\x0a    \x09environment: anEnvironment;\x0a        yourself",
messageSends: ["environment:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserModel.klass);


smalltalk.addClass('HLBrowserSourceWidget', smalltalk.HLWidget, ['model', 'codeWidget'], 'Helios-Browser');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@codeWidget"]=_st((smalltalk.HLCodeWidget || HLCodeWidget))._new();
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{}, smalltalk.HLBrowserSourceWidget)})},
args: [],
source: "codeWidget\x0a\x09^ codeWidget ifNil: [ codeWidget := HLCodeWidget new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HLCodeWidget"]
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents",
smalltalk.method({
selector: "contents",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._sourceArea())._contents();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{}, smalltalk.HLBrowserSourceWidget)})},
args: [],
source: "contents\x0a\x09^ self sourceArea contents",
messageSends: ["contents", "sourceArea"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_contents_",
smalltalk.method({
selector: "contents:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._codeWidget())._contents_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString}, smalltalk.HLBrowserSourceWidget)})},
args: ["aString"],
source: "contents: aString\x0a\x09self codeWidget contents: aString",
messageSends: ["contents:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLBrowserSourceWidget)})},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@model"]=aBrowserModel;
_st(self)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserSourceWidget)})},
args: ["aBrowserModel"],
source: "model: aBrowserModel\x0a\x09model := aBrowserModel.\x0a    \x0a    self observeModel",
messageSends: ["observeModel"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLMethodSelected || HLMethodSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onMethodSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLClassSelected || HLClassSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onClassSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
_st(_st(_st(self)._model())._announcer())._on_do_((smalltalk.HLProtocolSelected || HLProtocolSelected),(function(ann){
return smalltalk.withContext(function($ctx2) {return _st(self)._onProtocolSelected_(_st(ann)._item());
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLBrowserSourceWidget)})},
args: [],
source: "observeModel\x0a\x09self model announcer on: HLMethodSelected do: [ :ann |\x0a    \x09self onMethodSelected: ann item ].\x0a    self model announcer on: HLClassSelected do: [ :ann |\x0a    \x09self onClassSelected: ann item ].\x0a    self model announcer on: HLProtocolSelected do: [ :ann |\x0a    \x09self onProtocolSelected: ann item ]",
messageSends: ["on:do:", "onMethodSelected:", "item", "announcer", "model", "onClassSelected:", "onProtocolSelected:"],
referencedClasses: ["HLMethodSelected", "HLClassSelected", "HLProtocolSelected"]
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onClassSelected_",
smalltalk.method({
selector: "onClassSelected:",
category: 'reactions',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(aClass)._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onClassSelected:",{aClass:aClass}, smalltalk.HLBrowserSourceWidget)})},
args: ["aClass"],
source: "onClassSelected: aClass\x0a\x09aClass ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: aClass definition",
messageSends: ["ifNil:", "contents:", "definition"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onMethodSelected_",
smalltalk.method({
selector: "onMethodSelected:",
category: 'reactions',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aCompiledMethod;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(aCompiledMethod)._source());
return self}, function($ctx1) {$ctx1.fill(self,"onMethodSelected:",{aCompiledMethod:aCompiledMethod}, smalltalk.HLBrowserSourceWidget)})},
args: ["aCompiledMethod"],
source: "onMethodSelected: aCompiledMethod\x0a\x09aCompiledMethod ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: aCompiledMethod source",
messageSends: ["ifNil:", "contents:", "source"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_onProtocolSelected_",
smalltalk.method({
selector: "onProtocolSelected:",
category: 'reactions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self)._model())._selectedClass();
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(self)._contents_("");
return $2;
} else {
$1;
};
_st(self)._contents_(_st(_st(_st(self)._model())._selectedClass())._definition());
return self}, function($ctx1) {$ctx1.fill(self,"onProtocolSelected:",{aString:aString}, smalltalk.HLBrowserSourceWidget)})},
args: ["aString"],
source: "onProtocolSelected: aString\x0a\x09self model selectedClass ifNil: [ ^ self contents: '' ].\x0a    \x0a    self contents: self model selectedClass definition",
messageSends: ["ifNil:", "contents:", "selectedClass", "model", "definition"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._codeWidget())._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLBrowserSourceWidget)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self codeWidget renderOn: html",
messageSends: ["renderOn:", "codeWidget"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._model_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserSourceWidget.klass)})},
args: ["aBrowserModel"],
source: "on: aBrowserModel\x0a\x09^ self new\x0a    \x09model: aBrowserModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserSourceWidget.klass);


smalltalk.addClass('HLClassCache', smalltalk.Object, ['class', 'parentCache', 'overrideCache', 'overriddenCache'], 'Helios-Browser');
smalltalk.addMethod(
"_isOverridden_",
smalltalk.method({
selector: "isOverridden:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._overriddenCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aMethod)._isOverridden();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod}, smalltalk.HLClassCache)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a\x09^ self overriddenCache \x0a    \x09at: aMethod selector\x0a      \x09ifAbsentPut: [ aMethod isOverridden ]",
messageSends: ["at:ifAbsentPut:", "selector", "isOverridden", "overriddenCache"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_isOverride_",
smalltalk.method({
selector: "isOverride:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._overrideCache())._at_ifAbsentPut_(_st(aMethod)._selector(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(aMethod)._isOverride();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod}, smalltalk.HLClassCache)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x09^ self overrideCache\x0a    \x09at: aMethod selector\x0a      \x09ifAbsentPut: [ aMethod isOverride ]",
messageSends: ["at:ifAbsentPut:", "selector", "isOverride", "overrideCache"],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_overriddenCache",
smalltalk.method({
selector: "overriddenCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@overriddenCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@overriddenCache"]=_st((smalltalk.HashedCollection || HashedCollection))._new();
$1=self["@overriddenCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overriddenCache",{}, smalltalk.HLClassCache)})},
args: [],
source: "overriddenCache\x0a\x09^ overriddenCache ifNil: [ overriddenCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_overrideCache",
smalltalk.method({
selector: "overrideCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@overrideCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@overrideCache"]=_st((smalltalk.HashedCollection || HashedCollection))._new();
$1=self["@overrideCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"overrideCache",{}, smalltalk.HLClassCache)})},
args: [],
source: "overrideCache\x0a\x09^ overrideCache ifNil: [ overrideCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_parentCache",
smalltalk.method({
selector: "parentCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@parentCache"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentCache",{}, smalltalk.HLClassCache)})},
args: [],
source: "parentCache\x0a\x09^ parentCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_parentCache_",
smalltalk.method({
selector: "parentCache:",
category: 'accessing',
fn: function (aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@parentCache"]=aCache;
return self}, function($ctx1) {$ctx1.fill(self,"parentCache:",{aCache:aCache}, smalltalk.HLClassCache)})},
args: ["aCache"],
source: "parentCache: aCache\x0a\x09parentCache := aCache",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@class"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{}, smalltalk.HLClassCache)})},
args: [],
source: "theClass\x0a\x09^ class",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@class"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass}, smalltalk.HLClassCache)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09class := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLClassCache);


smalltalk.addMethod(
"_on_parentCache_",
smalltalk.method({
selector: "on:parentCache:",
category: 'instance creation',
fn: function (aClass,aCache){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._theClass_(aClass);
_st($2)._parentCache_(aCache);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:parentCache:",{aClass:aClass,aCache:aCache}, smalltalk.HLClassCache.klass)})},
args: ["aClass", "aCache"],
source: "on: aClass parentCache: aCache\x0a\x09^ self new\x0a    \x09theClass: aClass;\x0a        parentCache: aCache;\x0a        yourself",
messageSends: ["theClass:", "new", "parentCache:", "yourself"],
referencedClasses: []
}),
smalltalk.HLClassCache.klass);


smalltalk.addClass('HLSelectorsCache', smalltalk.Object, ['classesCache'], 'Helios-Browser');
smalltalk.addMethod(
"_cacheFor_",
smalltalk.method({
selector: "cacheFor:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=aClass;
if(($receiver = $1) == nil || $receiver == undefined){
return nil;
} else {
$1;
};
$2=_st(_st(self)._classesCache())._at_ifAbsentPut_(_st(aClass)._name(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._newCacheFor_(aClass);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"cacheFor:",{aClass:aClass}, smalltalk.HLSelectorsCache)})},
args: ["aClass"],
source: "cacheFor: aClass\x0a\x09aClass ifNil: [ ^ nil ].\x0a    \x0a\x09^ self classesCache\x0a    \x09at: aClass name\x0a        ifAbsentPut: [ self newCacheFor: aClass ]",
messageSends: ["ifNil:", "at:ifAbsentPut:", "name", "newCacheFor:", "classesCache"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_classesCache",
smalltalk.method({
selector: "classesCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@classesCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@classesCache"]=_st((smalltalk.HashedCollection || HashedCollection))._new();
$1=self["@classesCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"classesCache",{}, smalltalk.HLSelectorsCache)})},
args: [],
source: "classesCache\x0a\x09^ classesCache ifNil: [ classesCache := HashedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_isOverridden_",
smalltalk.method({
selector: "isOverridden:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._cacheFor_(_st(aMethod)._methodClass()))._isOverridden_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverridden:",{aMethod:aMethod}, smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "isOverridden: aMethod\x0a\x09^ (self cacheFor: aMethod methodClass)\x0a    \x09isOverridden: aMethod",
messageSends: ["isOverridden:", "cacheFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_isOverride_",
smalltalk.method({
selector: "isOverride:",
category: 'testing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._cacheFor_(_st(aMethod)._methodClass()))._isOverride_(aMethod);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isOverride:",{aMethod:aMethod}, smalltalk.HLSelectorsCache)})},
args: ["aMethod"],
source: "isOverride: aMethod\x0a\x09^ (self cacheFor: aMethod methodClass)\x0a    \x09isOverride: aMethod",
messageSends: ["isOverride:", "cacheFor:", "methodClass"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache);

smalltalk.addMethod(
"_newCacheFor_",
smalltalk.method({
selector: "newCacheFor:",
category: 'factory',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st((smalltalk.HLClassCache || HLClassCache))._on_parentCache_(aClass,_st(self)._cacheFor_(_st(aClass)._superclass()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCacheFor:",{aClass:aClass}, smalltalk.HLSelectorsCache)})},
args: ["aClass"],
source: "newCacheFor: aClass\x0a\x09^ HLClassCache \x0a    \x09on: aClass\x0a        parentCache: (self cacheFor: aClass superclass)",
messageSends: ["on:parentCache:", "cacheFor:", "superclass"],
referencedClasses: ["HLClassCache"]
}),
smalltalk.HLSelectorsCache);


smalltalk.HLSelectorsCache.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.Object.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.HLSelectorsCache.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
"_flush",
smalltalk.method({
selector: "flush",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@current"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flush",{}, smalltalk.HLSelectorsCache.klass)})},
args: [],
source: "flush\x0a\x09current := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{}, smalltalk.HLSelectorsCache.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.HLSelectorsCache.klass);


smalltalk.addMethod(
"_isOverridden",
smalltalk.method({
selector: "isOverridden",
category: '*Helios-Browser',
fn: function (){
var self=this;
var selector;
return smalltalk.withContext(function($ctx1) { var $1;
var $early={};
try {
selector=_st(self)._selector();
_st(_st(self)._methodClass())._allSubclassesDo_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st(each)._includesSelector_(selector);
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"isOverridden",{selector:selector}, smalltalk.CompiledMethod)})},
args: [],
source: "isOverridden\x0a\x09| selector |\x0a    \x0a    selector := self selector.\x0a    self methodClass allSubclassesDo: [ :each |\x0a\x09    (each includesSelector: selector)\x0a        \x09ifTrue: [ ^ true ] ].\x0a\x09^ false",
messageSends: ["selector", "allSubclassesDo:", "ifTrue:", "includesSelector:", "methodClass"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
"_isOverride",
smalltalk.method({
selector: "isOverride",
category: '*Helios-Browser',
fn: function (){
var self=this;
var superclass;
return smalltalk.withContext(function($ctx1) { var $1,$2;
superclass=_st(_st(self)._methodClass())._superclass();
$1=superclass;
if(($receiver = $1) == nil || $receiver == undefined){
return false;
} else {
$1;
};
$2=_st(_st(_st(_st(self)._methodClass())._superclass())._lookupSelector_(_st(self)._selector()))._isNil();
return $2;
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass}, smalltalk.CompiledMethod)})},
args: [],
source: "isOverride\x0a\x09| superclass |\x0a    \x0a    superclass := self methodClass superclass.\x0a\x09superclass ifNil: [ ^ false ].\x0a\x09\x0a    ^ (self methodClass superclass lookupSelector: self selector) isNil",
messageSends: ["superclass", "methodClass", "ifNil:", "isNil", "lookupSelector:", "selector"],
referencedClasses: []
}),
smalltalk.CompiledMethod);

