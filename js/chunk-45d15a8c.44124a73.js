(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45d15a8c"],{8485:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.error||!e.relation?a("div",{staticClass:"translation error"},[a("p",[a("v-icon",{attrs:{name:"warning"}}),e._v("\n    "+e._s(e.$t("interfaces-translation-translation_not_setup"))+"\n  ")],1)]):e.languages&&0===e.languages.length?a("div",{staticClass:"translation error"},[a("p",[a("v-icon",{attrs:{name:"warning"}}),e._v("\n    "+e._s(e.$t("interfaces-translation-translation_no_languages"))+"\n  ")],1)]):e.activeLanguage?a("div",{staticClass:"translation"},[a("v-simple-select",{staticClass:"language-select",attrs:{placeholder:e.$t("interfaces-translation-choose_language")},model:{value:e.activeLanguage,callback:function(t){e.activeLanguage=t},expression:"activeLanguage"}},e._l(e.languages,function(t){return a("option",{key:t.code,domProps:{value:t.code}},[e._v("\n      "+e._s(t.name)+"\n    ")])}),0),a("hr"),a("v-form",{key:e.activeLanguage,ref:"form",staticClass:"form",attrs:{fields:e.relatedFields,values:e.langValue,collection:e.relation.collection_many.collection,"new-item":e.isNew},on:{"stage-value":e.stageValue}})],1):e._e()},i=[],l=a("cebc"),s=a("bd86"),u=a("75fc"),o=(a("ac6a"),a("7514"),a("8db2")),r=a.n(o),c={mixins:[r.a],data:function(){return{activeLanguage:null,languages:null}},computed:{error:function(){return!this.options.languagesCollection||!this.options.translationLanguageField},primaryKeyField:function(){return _.find(this.fields,{primary_key:!0}).field},primaryKey:function(){return this.values[this.primaryKeyField]},relatedFields:function(){return this.relation?this.relation.collection_many.fields:null},languageFields:function(){return this.options.languagesCollection?this.$store.state.collections[this.options.languagesCollection].fields:null},langValue:function(){return this.languages&&this.activeLanguage&&this.value&&this.valuesByLang[this.activeLanguage]||{}},isNew:function(){return void 0!==this.valuesByLang[this.activeLanguage]},valuesByLang:function(){return this.value?_.keyBy(this.value,this.options.translationLanguageField):{}},fieldManyName:function(){return this.relation.field_many.field}},created:function(){this.fetchLanguages()},methods:{fetchLanguages:function(){var e=this;if(!this.options.languagesCollection||!this.options.translationLanguageField)return null;this.$api.getItems(this.options.languagesCollection,{limit:-1}).then(function(e){return e.data}).then(function(t){if(0!==t.length){var a=e.options.languagesPrimaryKeyField,n=e.options.languagesNameField;e.languages=t.map(function(e){return{code:e[a],name:e[n]}}),e.activeLanguage=e.options.defaultLanguage||t[0][_.find(e.languageFields,{primary_key:!0}).field]}})},stageValue:function(e){var t,a,n,i=this,o=e.field,r=e.value;this.valuesByLang[this.activeLanguage]?t=this.value.map(function(e){return e[i.options.translationLanguageField]===i.activeLanguage?Object(l["a"])({},e,Object(s["a"])({},o,r)):e}):t=this.newItem?[].concat(Object(u["a"])(this.value||[]),[(a={},Object(s["a"])(a,this.options.translationLanguageField,this.activeLanguage),Object(s["a"])(a,o,r),a)]):[].concat(Object(u["a"])(this.value||[]),[(n={},Object(s["a"])(n,this.relation.field_many.field,this.primaryKey),Object(s["a"])(n,this.options.translationLanguageField,this.activeLanguage),Object(s["a"])(n,o,r),n)]);return t=t.map(function(e){var t=Object.assign({},e);return delete t[i.fieldManyName],t}),this.$emit("input",t)}}},g=c,d=(a("8b3a"),a("2877")),f=Object(d["a"])(g,n,i,!1,null,"2963cb82",null);t["default"]=f.exports},"8b3a":function(e,t,a){"use strict";var n=a("e242"),i=a.n(n);i.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},e242:function(e,t,a){}}]);
//# sourceMappingURL=chunk-45d15a8c.44124a73.js.map