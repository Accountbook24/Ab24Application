import { ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import * as tween from '@tweenjs/tween.js';
export interface WrapGroupDimensions {
    numberOfKnownWrapGroupChildSizes: number;
    sumOfKnownWrapGroupChildWidths: number;
    sumOfKnownWrapGroupChildHeights: number;
    maxChildSizePerWrapGroup: WrapGroupDimension[];
}
export interface WrapGroupDimension {
    childWidth: number;
    childHeight: number;
    items: any[];
}
export interface IDimensions {
    itemCount: number;
    itemsPerWrapGroup: number;
    wrapGroupsPerPage: number;
    itemsPerPage: number;
    pageCount_fractional: number;
    childWidth: number;
    childHeight: number;
    scrollLength: number;
    viewportLength: number;
    maxScrollPosition: number;
}
export interface IPageInfo {
    startIndex: number;
    endIndex: number;
    scrollStartPosition: number;
    scrollEndPosition: number;
    startIndexWithBuffer: number;
    endIndexWithBuffer: number;
    maxScrollPosition: number;
}
export interface ChangeEvent extends IPageInfo {
    start: number;
    end: number;
}
export interface IViewport extends IPageInfo {
    padding: number;
    scrollLength: number;
}
export declare class VirtualScrollerComponent implements OnInit, OnChanges, OnDestroy {
    protected readonly element: ElementRef;
    protected readonly renderer: Renderer2;
    protected readonly zone: NgZone;
    protected changeDetectorRef: ChangeDetectorRef;
    viewPortItems: any[];
    window: Window;
    readonly viewPortInfo: IPageInfo;
    executeRefreshOutsideAngularZone: boolean;
    protected _enableUnequalChildrenSizes: boolean;
    enableUnequalChildrenSizes: boolean;
    useMarginInsteadOfTranslate: boolean;
    modifyOverflowStyleOfParentScroll: boolean;
    stripedTable: boolean;
    scrollbarWidth: number;
    scrollbarHeight: number;
    childWidth: number;
    childHeight: number;
    ssrChildWidth: number;
    ssrChildHeight: number;
    ssrViewportWidth: number;
    ssrViewportHeight: number;
    protected _bufferAmount: number;
    bufferAmount: number;
    scrollAnimationTime: number;
    resizeBypassRefreshThreshold: number;
    protected _scrollThrottlingTime: number;
    scrollThrottlingTime: number;
    protected _scrollDebounceTime: number;
    scrollDebounceTime: number;
    protected onScroll: () => void;
    protected updateOnScrollFunction(): void;
    protected checkScrollElementResizedTimer: number;
    protected _checkResizeInterval: number;
    checkResizeInterval: number;
    protected _items: any[];
    items: any[];
    compareItems: (item1: any, item2: any) => boolean;
    protected _horizontal: boolean;
    horizontal: boolean;
    protected revertParentOverscroll(): void;
    protected oldParentScrollOverflow: {
        x: string;
        y: string;
    };
    protected _parentScroll: Element | Window;
    parentScroll: Element | Window;
    update: EventEmitter<any[]>;
    vsUpdate: EventEmitter<any[]>;
    change: EventEmitter<ChangeEvent>;
    vsChange: EventEmitter<ChangeEvent>;
    start: EventEmitter<ChangeEvent>;
    vsStart: EventEmitter<ChangeEvent>;
    end: EventEmitter<ChangeEvent>;
    vsEnd: EventEmitter<ChangeEvent>;
    protected contentElementRef: ElementRef;
    protected invisiblePaddingElementRef: ElementRef;
    protected headerElementRef: ElementRef;
    protected containerElementRef: ElementRef;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: any): void;
    ngDoCheck(): void;
    refresh(): void;
    invalidateAllCachedMeasurements(): void;
    invalidateCachedMeasurementForItem(item: any): void;
    invalidateCachedMeasurementAtIndex(index: number): void;
    scrollInto(item: any, alignToBeginning?: boolean, additionalOffset?: number, animationMilliseconds?: number, animationCompletedCallback?: () => void): void;
    scrollToIndex(index: number, alignToBeginning?: boolean, additionalOffset?: number, animationMilliseconds?: number, animationCompletedCallback?: () => void): void;
    protected scrollToIndex_internal(index: number, alignToBeginning?: boolean, additionalOffset?: number, animationMilliseconds?: number, animationCompletedCallback?: () => void): void;
    scrollToPosition(scrollPosition: number, animationMilliseconds?: number, animationCompletedCallback?: () => void): void;
    protected isAngularUniversalSSR: boolean;
    constructor(element: ElementRef, renderer: Renderer2, zone: NgZone, changeDetectorRef: ChangeDetectorRef, platformId: Object, scrollThrottlingTime: any, scrollDebounceTime: any, scrollAnimationTime: any, scrollbarWidth: any, scrollbarHeight: any, checkResizeInterval: any, resizeBypassRefreshThreshold: any, modifyOverflowStyleOfParentScroll: any, stripedTable: any);
    protected previousScrollBoundingRect: ClientRect;
    protected checkScrollElementResized(): void;
    protected _invisiblePaddingProperty: any;
    protected _offsetType: any;
    protected _scrollType: any;
    protected _pageOffsetType: any;
    protected _childScrollDim: any;
    protected _translateDir: any;
    protected _marginDir: any;
    protected updateDirection(): void;
    protected debounce(func: Function, wait: number): Function;
    protected throttleTrailing(func: Function, wait: number): Function;
    protected calculatedScrollbarWidth: number;
    protected calculatedScrollbarHeight: number;
    protected padding: number;
    protected previousViewPort: IViewport;
    // protected currentTween: tween.Tween;
    protected cachedItemsLength: number;
    protected disposeScrollHandler: () => void | undefined;
    protected disposeResizeHandler: () => void | undefined;
    protected refresh_internal(itemsArrayModified: boolean, refreshCompletedCallback?: () => void, maxRunTimes?: number): void;
    protected getScrollElement(): HTMLElement;
    protected addScrollEventHandlers(): void;
    protected removeScrollEventHandlers(): void;
    protected getElementsOffset(): number;
    protected countItemsPerWrapGroup(): number;
    protected getScrollStartPosition(): number;
    protected minMeasuredChildWidth: number;
    protected minMeasuredChildHeight: number;
    protected wrapGroupDimensions: WrapGroupDimensions;
    protected resetWrapGroupDimensions(): void;
    protected calculateDimensions(): IDimensions;
    protected cachedPageSize: number;
    protected previousScrollNumberElements: number;
    protected calculatePadding(arrayStartIndexWithBuffer: number, dimensions: IDimensions): number;
    protected calculatePageInfo(scrollPosition: number, dimensions: IDimensions): IPageInfo;
    protected calculateViewport(): IViewport;
}
export declare class VirtualScrollerModule {
}
