"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/vue/index.ts
var vue_exports = {};
__export(vue_exports, {
  ComputedGetter: () => import_vue.ComputedGetter,
  ComputedRef: () => import_vue.ComputedRef,
  ComputedSetter: () => import_vue.ComputedSetter,
  CustomRefFactory: () => import_vue.CustomRefFactory,
  DebuggerEvent: () => import_vue.DebuggerEvent,
  DebuggerEventExtraInfo: () => import_vue.DebuggerEventExtraInfo,
  DebuggerOptions: () => import_vue.DebuggerOptions,
  DeepReadonly: () => import_vue.DeepReadonly,
  EffectScheduler: () => import_vue.EffectScheduler,
  EffectScope: () => import_vue.EffectScope,
  Raw: () => import_vue.Raw,
  ReactiveEffect: () => import_vue.ReactiveEffect,
  ReactiveEffectOptions: () => import_vue.ReactiveEffectOptions,
  ReactiveEffectRunner: () => import_vue.ReactiveEffectRunner,
  ReactiveFlags: () => import_vue.ReactiveFlags,
  Ref: () => import_vue.Ref,
  ShallowReactive: () => import_vue.ShallowReactive,
  ShallowRef: () => import_vue.ShallowRef,
  ShallowUnwrapRef: () => import_vue.ShallowUnwrapRef,
  ToRef: () => import_vue.ToRef,
  ToRefs: () => import_vue.ToRefs,
  TrackOpTypes: () => import_vue.TrackOpTypes,
  TriggerOpTypes: () => import_vue.TriggerOpTypes,
  UnwrapNestedRefs: () => import_vue.UnwrapNestedRefs,
  UnwrapRef: () => import_vue.UnwrapRef,
  WatchCallback: () => import_vue.WatchCallback,
  WatchEffect: () => import_vue.WatchEffect,
  WatchOptions: () => import_vue.WatchOptions,
  WatchOptionsBase: () => import_vue.WatchOptionsBase,
  WatchSource: () => import_vue.WatchSource,
  WatchStopHandle: () => import_vue.WatchStopHandle,
  WritableComputedOptions: () => import_vue.WritableComputedOptions,
  WritableComputedRef: () => import_vue.WritableComputedRef,
  computed: () => import_vue.computed,
  customRef: () => import_vue.customRef,
  effect: () => import_vue.effect,
  effectScope: () => import_vue.effectScope,
  getCurrentScope: () => import_vue.getCurrentScope,
  isProxy: () => import_vue.isProxy,
  isReactive: () => import_vue.isReactive,
  isReadonly: () => import_vue.isReadonly,
  isRef: () => import_vue.isRef,
  isShallow: () => import_vue.isShallow,
  markRaw: () => import_vue.markRaw,
  onScopeDispose: () => import_vue.onScopeDispose,
  proxyRefs: () => import_vue.proxyRefs,
  reactive: () => import_vue.reactive,
  readonly: () => import_vue.readonly,
  ref: () => import_vue.ref,
  shallowReactive: () => import_vue.shallowReactive,
  shallowReadonly: () => import_vue.shallowReadonly,
  shallowRef: () => import_vue.shallowRef,
  stop: () => import_vue.stop,
  toRaw: () => import_vue.toRaw,
  toRef: () => import_vue.toRef,
  toRefs: () => import_vue.toRefs,
  triggerRef: () => import_vue.triggerRef,
  unref: () => import_vue.unref,
  watch: () => import_vue.watch,
  watchEffect: () => import_vue.watchEffect
});
module.exports = __toCommonJS(vue_exports);
var import_vue = require("vue");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ComputedGetter,
  ComputedRef,
  ComputedSetter,
  CustomRefFactory,
  DebuggerEvent,
  DebuggerEventExtraInfo,
  DebuggerOptions,
  DeepReadonly,
  EffectScheduler,
  EffectScope,
  Raw,
  ReactiveEffect,
  ReactiveEffectOptions,
  ReactiveEffectRunner,
  ReactiveFlags,
  Ref,
  ShallowReactive,
  ShallowRef,
  ShallowUnwrapRef,
  ToRef,
  ToRefs,
  TrackOpTypes,
  TriggerOpTypes,
  UnwrapNestedRefs,
  UnwrapRef,
  WatchCallback,
  WatchEffect,
  WatchOptions,
  WatchOptionsBase,
  WatchSource,
  WatchStopHandle,
  WritableComputedOptions,
  WritableComputedRef,
  computed,
  customRef,
  effect,
  effectScope,
  getCurrentScope,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isShallow,
  markRaw,
  onScopeDispose,
  proxyRefs,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  stop,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  watch,
  watchEffect
});
