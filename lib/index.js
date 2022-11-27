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

// lib/charrue/index.ts
var charrue_exports = {};
__export(charrue_exports, {
  ComputedGetter: () => import_reactivity.ComputedGetter,
  ComputedRef: () => import_reactivity.ComputedRef,
  ComputedSetter: () => import_reactivity.ComputedSetter,
  CustomRefFactory: () => import_reactivity.CustomRefFactory,
  DebuggerEvent: () => import_reactivity.DebuggerEvent,
  DebuggerEventExtraInfo: () => import_reactivity.DebuggerEventExtraInfo,
  DebuggerOptions: () => import_reactivity.DebuggerOptions,
  DeepReadonly: () => import_reactivity.DeepReadonly,
  EffectScheduler: () => import_reactivity.EffectScheduler,
  EffectScope: () => import_reactivity.EffectScope,
  Raw: () => import_reactivity.Raw,
  ReactiveEffect: () => import_reactivity.ReactiveEffect,
  ReactiveEffectOptions: () => import_reactivity.ReactiveEffectOptions,
  ReactiveEffectRunner: () => import_reactivity.ReactiveEffectRunner,
  ReactiveFlags: () => import_reactivity.ReactiveFlags,
  Ref: () => import_reactivity.Ref,
  ShallowReactive: () => import_reactivity.ShallowReactive,
  ShallowRef: () => import_reactivity.ShallowRef,
  ShallowUnwrapRef: () => import_reactivity.ShallowUnwrapRef,
  ToRef: () => import_reactivity.ToRef,
  ToRefs: () => import_reactivity.ToRefs,
  TrackOpTypes: () => import_reactivity.TrackOpTypes,
  TriggerOpTypes: () => import_reactivity.TriggerOpTypes,
  UnwrapNestedRefs: () => import_reactivity.UnwrapNestedRefs,
  UnwrapRef: () => import_reactivity.UnwrapRef,
  WatchCallback: () => import_watch.WatchCallback,
  WatchEffect: () => import_watch.WatchEffect,
  WatchOptions: () => import_watch.WatchOptions,
  WatchOptionsBase: () => import_watch.WatchOptionsBase,
  WatchSource: () => import_watch.WatchSource,
  WatchStopHandle: () => import_watch.WatchStopHandle,
  WritableComputedOptions: () => import_reactivity.WritableComputedOptions,
  WritableComputedRef: () => import_reactivity.WritableComputedRef,
  computed: () => import_reactivity.computed,
  customRef: () => import_reactivity.customRef,
  effect: () => import_reactivity.effect,
  effectScope: () => import_reactivity.effectScope,
  getCurrentScope: () => import_reactivity.getCurrentScope,
  isProxy: () => import_reactivity.isProxy,
  isReactive: () => import_reactivity.isReactive,
  isReadonly: () => import_reactivity.isReadonly,
  isRef: () => import_reactivity.isRef,
  isShallow: () => import_reactivity.isShallow,
  markRaw: () => import_reactivity.markRaw,
  onScopeDispose: () => import_reactivity.onScopeDispose,
  proxyRefs: () => import_reactivity.proxyRefs,
  reactive: () => import_reactivity.reactive,
  readonly: () => import_reactivity.readonly,
  ref: () => import_reactivity.ref,
  shallowReactive: () => import_reactivity.shallowReactive,
  shallowReadonly: () => import_reactivity.shallowReadonly,
  shallowRef: () => import_reactivity.shallowRef,
  stop: () => import_reactivity.stop,
  toRaw: () => import_reactivity.toRaw,
  toRef: () => import_reactivity.toRef,
  toRefs: () => import_reactivity.toRefs,
  trigger: () => import_reactivity.trigger,
  triggerRef: () => import_reactivity.triggerRef,
  unref: () => import_reactivity.unref,
  watch: () => import_watch.watch,
  watchEffect: () => import_watch.watchEffect
});
module.exports = __toCommonJS(charrue_exports);
var import_reactivity = require("@vue/reactivity");
var import_watch = require("@vue-reactivity/watch");
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
  trigger,
  triggerRef,
  unref,
  watch,
  watchEffect
});
