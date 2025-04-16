"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-fast-marquee";
exports.ids = ["vendor-chunks/react-fast-marquee"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-fast-marquee/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-fast-marquee/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/* __next_internal_client_entry_do_not_use__  cjs */ \nfunction ___$insertStyle(css) {\n    if (!css || \"undefined\" === \"undefined\") {\n        return;\n    }\n    const style = document.createElement(\"style\");\n    style.setAttribute(\"type\", \"text/css\");\n    style.innerHTML = css;\n    document.head.appendChild(style);\n    return css;\n}\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nfunction _interopDefaultLegacy(e) {\n    return e && typeof e === \"object\" && \"default\" in e ? e : {\n        \"default\": e\n    };\n}\nvar React__default = /*#__PURE__*/ _interopDefaultLegacy(React);\n___$insertStyle('.rfm-marquee-container {\\n  overflow-x: hidden;\\n  display: flex;\\n  flex-direction: row;\\n  position: relative;\\n  width: var(--width);\\n  transform: var(--transform);\\n}\\n.rfm-marquee-container:hover div {\\n  animation-play-state: var(--pause-on-hover);\\n}\\n.rfm-marquee-container:active div {\\n  animation-play-state: var(--pause-on-click);\\n}\\n\\n.rfm-overlay {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n}\\n.rfm-overlay::before, .rfm-overlay::after {\\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\\n  content: \"\";\\n  height: 100%;\\n  position: absolute;\\n  width: var(--gradient-width);\\n  z-index: 2;\\n  pointer-events: none;\\n  touch-action: none;\\n}\\n.rfm-overlay::after {\\n  right: 0;\\n  top: 0;\\n  transform: rotateZ(180deg);\\n}\\n.rfm-overlay::before {\\n  left: 0;\\n  top: 0;\\n}\\n\\n.rfm-marquee {\\n  flex: 0 0 auto;\\n  min-width: var(--min-width);\\n  z-index: 1;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\\n  animation-play-state: var(--play);\\n  animation-delay: var(--delay);\\n  animation-direction: var(--direction);\\n}\\n@keyframes scroll {\\n  0% {\\n    transform: translateX(0%);\\n  }\\n  100% {\\n    transform: translateX(-100%);\\n  }\\n}\\n\\n.rfm-initial-child-container {\\n  flex: 0 0 auto;\\n  display: flex;\\n  min-width: auto;\\n  flex-direction: row;\\n  align-items: center;\\n}\\n\\n.rfm-child {\\n  transform: var(--transform);\\n}');\nconst Marquee = React.forwardRef(function Marquee({ style = {}, className = \"\", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = \"left\", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = \"white\", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {\n    // React Hooks\n    const [containerWidth, setContainerWidth] = React.useState(0);\n    const [marqueeWidth, setMarqueeWidth] = React.useState(0);\n    const [multiplier, setMultiplier] = React.useState(1);\n    const [isMounted, setIsMounted] = React.useState(false);\n    const rootRef = React.useRef(null);\n    const containerRef = ref || rootRef;\n    const marqueeRef = React.useRef(null);\n    // Calculate width of container and marquee and set multiplier\n    const calculateWidth = React.useCallback(()=>{\n        if (marqueeRef.current && containerRef.current) {\n            const containerRect = containerRef.current.getBoundingClientRect();\n            const marqueeRect = marqueeRef.current.getBoundingClientRect();\n            let containerWidth = containerRect.width;\n            let marqueeWidth = marqueeRect.width;\n            // Swap width and height if direction is up or down\n            if (direction === \"up\" || direction === \"down\") {\n                containerWidth = containerRect.height;\n                marqueeWidth = marqueeRect.height;\n            }\n            if (autoFill && containerWidth && marqueeWidth) {\n                setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);\n            } else {\n                setMultiplier(1);\n            }\n            setContainerWidth(containerWidth);\n            setMarqueeWidth(marqueeWidth);\n        }\n    }, [\n        autoFill,\n        containerRef,\n        direction\n    ]);\n    // Calculate width and multiplier on mount and on window resize\n    React.useEffect(()=>{\n        if (!isMounted) return;\n        calculateWidth();\n        if (marqueeRef.current && containerRef.current) {\n            const resizeObserver = new ResizeObserver(()=>calculateWidth());\n            resizeObserver.observe(containerRef.current);\n            resizeObserver.observe(marqueeRef.current);\n            return ()=>{\n                if (!resizeObserver) return;\n                resizeObserver.disconnect();\n            };\n        }\n    }, [\n        calculateWidth,\n        containerRef,\n        isMounted\n    ]);\n    // Recalculate width when children change\n    React.useEffect(()=>{\n        calculateWidth();\n    }, [\n        calculateWidth,\n        children\n    ]);\n    React.useEffect(()=>{\n        setIsMounted(true);\n    }, []);\n    // Runs the onMount callback, if it is a function, when Marquee is mounted.\n    React.useEffect(()=>{\n        if (typeof onMount === \"function\") {\n            onMount();\n        }\n    }, []);\n    // Animation duration\n    const duration = React.useMemo(()=>{\n        if (autoFill) {\n            return marqueeWidth * multiplier / speed;\n        } else {\n            return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;\n        }\n    }, [\n        autoFill,\n        containerWidth,\n        marqueeWidth,\n        multiplier,\n        speed\n    ]);\n    const containerStyle = React.useMemo(()=>Object.assign(Object.assign({}, style), {\n            [\"--pause-on-hover\"]: !play || pauseOnHover ? \"paused\" : \"running\",\n            [\"--pause-on-click\"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? \"paused\" : \"running\",\n            [\"--width\"]: direction === \"up\" || direction === \"down\" ? `100vh` : \"100%\",\n            [\"--transform\"]: direction === \"up\" ? \"rotate(-90deg)\" : direction === \"down\" ? \"rotate(90deg)\" : \"none\"\n        }), [\n        style,\n        play,\n        pauseOnHover,\n        pauseOnClick,\n        direction\n    ]);\n    const gradientStyle = React.useMemo(()=>({\n            [\"--gradient-color\"]: gradientColor,\n            [\"--gradient-width\"]: typeof gradientWidth === \"number\" ? `${gradientWidth}px` : gradientWidth\n        }), [\n        gradientColor,\n        gradientWidth\n    ]);\n    const marqueeStyle = React.useMemo(()=>({\n            [\"--play\"]: play ? \"running\" : \"paused\",\n            [\"--direction\"]: direction === \"left\" ? \"normal\" : \"reverse\",\n            [\"--duration\"]: `${duration}s`,\n            [\"--delay\"]: `${delay}s`,\n            [\"--iteration-count\"]: !!loop ? `${loop}` : \"infinite\",\n            [\"--min-width\"]: autoFill ? `auto` : \"100%\"\n        }), [\n        play,\n        direction,\n        duration,\n        delay,\n        loop,\n        autoFill\n    ]);\n    const childStyle = React.useMemo(()=>({\n            [\"--transform\"]: direction === \"up\" ? \"rotate(90deg)\" : direction === \"down\" ? \"rotate(-90deg)\" : \"none\"\n        }), [\n        direction\n    ]);\n    // Render {multiplier} number of children\n    const multiplyChildren = React.useCallback((multiplier)=>{\n        return [\n            ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0)\n        ].map((_, i)=>React__default[\"default\"].createElement(React.Fragment, {\n                key: i\n            }, React.Children.map(children, (child)=>{\n                return React__default[\"default\"].createElement(\"div\", {\n                    style: childStyle,\n                    className: \"rfm-child\"\n                }, child);\n            })));\n    }, [\n        childStyle,\n        children\n    ]);\n    return !isMounted ? null : React__default[\"default\"].createElement(\"div\", {\n        ref: containerRef,\n        style: containerStyle,\n        className: \"rfm-marquee-container \" + className\n    }, gradient && React__default[\"default\"].createElement(\"div\", {\n        style: gradientStyle,\n        className: \"rfm-overlay\"\n    }), React__default[\"default\"].createElement(\"div\", {\n        className: \"rfm-marquee\",\n        style: marqueeStyle,\n        onAnimationIteration: onCycleComplete,\n        onAnimationEnd: onFinish\n    }, React__default[\"default\"].createElement(\"div\", {\n        className: \"rfm-initial-child-container\",\n        ref: marqueeRef\n    }, React.Children.map(children, (child)=>{\n        return React__default[\"default\"].createElement(\"div\", {\n            style: childStyle,\n            className: \"rfm-child\"\n        }, child);\n    })), multiplyChildren(multiplier - 1)), React__default[\"default\"].createElement(\"div\", {\n        className: \"rfm-marquee\",\n        style: marqueeStyle\n    }, multiplyChildren(multiplier)));\n});\nexports[\"default\"] = Marquee; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1tYXJxdWVlL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUdBLFNBQVNBLGdCQUFnQkMsR0FBRztJQUN4QixJQUFJLENBQUNBLE9BQU8sZ0JBQWtCLGFBQWE7UUFDdkM7SUFDSjtJQUNBLE1BQU1DLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztJQUNyQ0YsTUFBTUcsWUFBWSxDQUFDLFFBQVE7SUFDM0JILE1BQU1JLFNBQVMsR0FBR0w7SUFDbEJFLFNBQVNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDTjtJQUMxQixPQUFPRDtBQUNYO0FBRUFRLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBRTdELElBQUlDLFFBQVFDLG1CQUFPQSxDQUFDO0FBRXBCLFNBQVNDLHNCQUF1QkMsQ0FBQztJQUFJLE9BQU9BLEtBQUssT0FBT0EsTUFBTSxZQUFZLGFBQWFBLElBQUlBLElBQUk7UUFBRSxXQUFXQTtJQUFFO0FBQUc7QUFFakgsSUFBSUMsaUJBQWlCLFdBQVcsR0FBRUYsc0JBQXNCRjtBQUV4RGIsZ0JBQWdCO0FBRWhCLE1BQU1rQixVQUFVTCxNQUFNTSxVQUFVLENBQUMsU0FBU0QsUUFBUSxFQUFFaEIsUUFBUSxDQUFDLENBQUMsRUFBRWtCLFlBQVksRUFBRSxFQUFFQyxXQUFXLEtBQUssRUFBRUMsT0FBTyxJQUFJLEVBQUVDLGVBQWUsS0FBSyxFQUFFQyxlQUFlLEtBQUssRUFBRUMsWUFBWSxNQUFNLEVBQUVDLFFBQVEsRUFBRSxFQUFFQyxRQUFRLENBQUMsRUFBRUMsT0FBTyxDQUFDLEVBQUVDLFdBQVcsS0FBSyxFQUFFQyxnQkFBZ0IsT0FBTyxFQUFFQyxnQkFBZ0IsR0FBRyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUcsRUFBRUMsR0FBRztJQUNoVSxjQUFjO0lBQ2QsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHekIsTUFBTTBCLFFBQVEsQ0FB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O0FBQzNIO0FBRUEvQixrQkFBZSxHQUFHTyxTQUNsQixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9VUHRocmlmdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1mYXN0LW1hcnF1ZWUvZGlzdC9pbmRleC5qcz9jYzI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cblxuZnVuY3Rpb24gX19fJGluc2VydFN0eWxlKGNzcykge1xuICAgIGlmICghY3NzIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICByZXR1cm4gY3NzO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShSZWFjdCk7XG5cbl9fXyRpbnNlcnRTdHlsZShcIi5yZm0tbWFycXVlZS1jb250YWluZXIge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcbiAgdHJhbnNmb3JtOiB2YXIoLS10cmFuc2Zvcm0pO1xcbn1cXG4ucmZtLW1hcnF1ZWUtY29udGFpbmVyOmhvdmVyIGRpdiB7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tcGF1c2Utb24taG92ZXIpO1xcbn1cXG4ucmZtLW1hcnF1ZWUtY29udGFpbmVyOmFjdGl2ZSBkaXYge1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHZhcigtLXBhdXNlLW9uLWNsaWNrKTtcXG59XFxuXFxuLnJmbS1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucmZtLW92ZXJsYXk6OmJlZm9yZSwgLnJmbS1vdmVybGF5OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWdyYWRpZW50LWNvbG9yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiB2YXIoLS1ncmFkaWVudC13aWR0aCk7XFxuICB6LWluZGV4OiAyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcbi5yZm0tb3ZlcmxheTo6YWZ0ZXIge1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcXG59XFxuLnJmbS1vdmVybGF5OjpiZWZvcmUge1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnJmbS1tYXJxdWVlIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogc2Nyb2xsIHZhcigtLWR1cmF0aW9uKSBsaW5lYXIgdmFyKC0tZGVsYXkpIHZhcigtLWl0ZXJhdGlvbi1jb3VudCk7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tcGxheSk7XFxuICBhbmltYXRpb24tZGVsYXk6IHZhcigtLWRlbGF5KTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWRpcmVjdGlvbik7XFxufVxcbkBrZXlmcmFtZXMgc2Nyb2xsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbn1cXG5cXG4ucmZtLWluaXRpYWwtY2hpbGQtY29udGFpbmVyIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi13aWR0aDogYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmZtLWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogdmFyKC0tdHJhbnNmb3JtKTtcXG59XCIpO1xuXG5jb25zdCBNYXJxdWVlID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNYXJxdWVlKHsgc3R5bGUgPSB7fSwgY2xhc3NOYW1lID0gXCJcIiwgYXV0b0ZpbGwgPSBmYWxzZSwgcGxheSA9IHRydWUsIHBhdXNlT25Ib3ZlciA9IGZhbHNlLCBwYXVzZU9uQ2xpY2sgPSBmYWxzZSwgZGlyZWN0aW9uID0gXCJsZWZ0XCIsIHNwZWVkID0gNTAsIGRlbGF5ID0gMCwgbG9vcCA9IDAsIGdyYWRpZW50ID0gZmFsc2UsIGdyYWRpZW50Q29sb3IgPSBcIndoaXRlXCIsIGdyYWRpZW50V2lkdGggPSAyMDAsIG9uRmluaXNoLCBvbkN5Y2xlQ29tcGxldGUsIG9uTW91bnQsIGNoaWxkcmVuLCB9LCByZWYpIHtcclxuICAgIC8vIFJlYWN0IEhvb2tzXHJcbiAgICBjb25zdCBbY29udGFpbmVyV2lkdGgsIHNldENvbnRhaW5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW21hcnF1ZWVXaWR0aCwgc2V0TWFycXVlZVdpZHRoXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW211bHRpcGxpZXIsIHNldE11bHRpcGxpZXJdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IHJlZiB8fCByb290UmVmO1xyXG4gICAgY29uc3QgbWFycXVlZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIC8vIENhbGN1bGF0ZSB3aWR0aCBvZiBjb250YWluZXIgYW5kIG1hcnF1ZWUgYW5kIHNldCBtdWx0aXBsaWVyXHJcbiAgICBjb25zdCBjYWxjdWxhdGVXaWR0aCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAobWFycXVlZVJlZi5jdXJyZW50ICYmIGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgbWFycXVlZVJlY3QgPSBtYXJxdWVlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBtYXJxdWVlV2lkdGggPSBtYXJxdWVlUmVjdC53aWR0aDtcclxuICAgICAgICAgICAgLy8gU3dhcCB3aWR0aCBhbmQgaGVpZ2h0IGlmIGRpcmVjdGlvbiBpcyB1cCBvciBkb3duXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIiB8fCBkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lclJlY3QuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFycXVlZVdpZHRoID0gbWFycXVlZVJlY3QuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhdXRvRmlsbCAmJiBjb250YWluZXJXaWR0aCAmJiBtYXJxdWVlV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHNldE11bHRpcGxpZXIobWFycXVlZVdpZHRoIDwgY29udGFpbmVyV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICA/IE1hdGguY2VpbChjb250YWluZXJXaWR0aCAvIG1hcnF1ZWVXaWR0aClcclxuICAgICAgICAgICAgICAgICAgICA6IDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0TXVsdGlwbGllcigxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDb250YWluZXJXaWR0aChjb250YWluZXJXaWR0aCk7XHJcbiAgICAgICAgICAgIHNldE1hcnF1ZWVXaWR0aChtYXJxdWVlV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRvRmlsbCwgY29udGFpbmVyUmVmLCBkaXJlY3Rpb25dKTtcclxuICAgIC8vIENhbGN1bGF0ZSB3aWR0aCBhbmQgbXVsdGlwbGllciBvbiBtb3VudCBhbmQgb24gd2luZG93IHJlc2l6ZVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWlzTW91bnRlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhbGN1bGF0ZVdpZHRoKCk7XHJcbiAgICAgICAgaWYgKG1hcnF1ZWVSZWYuY3VycmVudCAmJiBjb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiBjYWxjdWxhdGVXaWR0aCgpKTtcclxuICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXJSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUobWFycXVlZVJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzaXplT2JzZXJ2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjYWxjdWxhdGVXaWR0aCwgY29udGFpbmVyUmVmLCBpc01vdW50ZWRdKTtcclxuICAgIC8vIFJlY2FsY3VsYXRlIHdpZHRoIHdoZW4gY2hpbGRyZW4gY2hhbmdlXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNhbGN1bGF0ZVdpZHRoKCk7XHJcbiAgICB9LCBbY2FsY3VsYXRlV2lkdGgsIGNoaWxkcmVuXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW91bnRlZCh0cnVlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIFJ1bnMgdGhlIG9uTW91bnQgY2FsbGJhY2ssIGlmIGl0IGlzIGEgZnVuY3Rpb24sIHdoZW4gTWFycXVlZSBpcyBtb3VudGVkLlxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIG9uTW91bnQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvbk1vdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gQW5pbWF0aW9uIGR1cmF0aW9uXHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdXRvRmlsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKG1hcnF1ZWVXaWR0aCAqIG11bHRpcGxpZXIpIC8gc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbWFycXVlZVdpZHRoIDwgY29udGFpbmVyV2lkdGhcclxuICAgICAgICAgICAgICAgID8gY29udGFpbmVyV2lkdGggLyBzcGVlZFxyXG4gICAgICAgICAgICAgICAgOiBtYXJxdWVlV2lkdGggLyBzcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0b0ZpbGwsIGNvbnRhaW5lcldpZHRoLCBtYXJxdWVlV2lkdGgsIG11bHRpcGxpZXIsIHNwZWVkXSk7XHJcbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IFtcIi0tcGF1c2Utb24taG92ZXJcIl06ICFwbGF5IHx8IHBhdXNlT25Ib3ZlciA/IFwicGF1c2VkXCIgOiBcInJ1bm5pbmdcIiwgW1wiLS1wYXVzZS1vbi1jbGlja1wiXTogIXBsYXkgfHwgKHBhdXNlT25Ib3ZlciAmJiAhcGF1c2VPbkNsaWNrKSB8fCBwYXVzZU9uQ2xpY2tcclxuICAgICAgICAgICAgPyBcInBhdXNlZFwiXHJcbiAgICAgICAgICAgIDogXCJydW5uaW5nXCIsIFtcIi0td2lkdGhcIl06IGRpcmVjdGlvbiA9PT0gXCJ1cFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgPyBgMTAwdmhgIDogXCIxMDAlXCIsIFtcIi0tdHJhbnNmb3JtXCJdOiBkaXJlY3Rpb24gPT09IFwidXBcIlxyXG4gICAgICAgICAgICA/IFwicm90YXRlKC05MGRlZylcIlxyXG4gICAgICAgICAgICA6IGRpcmVjdGlvbiA9PT0gXCJkb3duXCJcclxuICAgICAgICAgICAgICAgID8gXCJyb3RhdGUoOTBkZWcpXCJcclxuICAgICAgICAgICAgICAgIDogXCJub25lXCIgfSkpLCBbc3R5bGUsIHBsYXksIHBhdXNlT25Ib3ZlciwgcGF1c2VPbkNsaWNrLCBkaXJlY3Rpb25dKTtcclxuICAgIGNvbnN0IGdyYWRpZW50U3R5bGUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgW1wiLS1ncmFkaWVudC1jb2xvclwiXTogZ3JhZGllbnRDb2xvcixcclxuICAgICAgICBbXCItLWdyYWRpZW50LXdpZHRoXCJdOiB0eXBlb2YgZ3JhZGllbnRXaWR0aCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICA/IGAke2dyYWRpZW50V2lkdGh9cHhgXHJcbiAgICAgICAgICAgIDogZ3JhZGllbnRXaWR0aCxcclxuICAgIH0pLCBbZ3JhZGllbnRDb2xvciwgZ3JhZGllbnRXaWR0aF0pO1xyXG4gICAgY29uc3QgbWFycXVlZVN0eWxlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xyXG4gICAgICAgIFtcIi0tcGxheVwiXTogcGxheSA/IFwicnVubmluZ1wiIDogXCJwYXVzZWRcIixcclxuICAgICAgICBbXCItLWRpcmVjdGlvblwiXTogZGlyZWN0aW9uID09PSBcImxlZnRcIiA/IFwibm9ybWFsXCIgOiBcInJldmVyc2VcIixcclxuICAgICAgICBbXCItLWR1cmF0aW9uXCJdOiBgJHtkdXJhdGlvbn1zYCxcclxuICAgICAgICBbXCItLWRlbGF5XCJdOiBgJHtkZWxheX1zYCxcclxuICAgICAgICBbXCItLWl0ZXJhdGlvbi1jb3VudFwiXTogISFsb29wID8gYCR7bG9vcH1gIDogXCJpbmZpbml0ZVwiLFxyXG4gICAgICAgIFtcIi0tbWluLXdpZHRoXCJdOiBhdXRvRmlsbCA/IGBhdXRvYCA6IFwiMTAwJVwiLFxyXG4gICAgfSksIFtwbGF5LCBkaXJlY3Rpb24sIGR1cmF0aW9uLCBkZWxheSwgbG9vcCwgYXV0b0ZpbGxdKTtcclxuICAgIGNvbnN0IGNoaWxkU3R5bGUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgW1wiLS10cmFuc2Zvcm1cIl06IGRpcmVjdGlvbiA9PT0gXCJ1cFwiXHJcbiAgICAgICAgICAgID8gXCJyb3RhdGUoOTBkZWcpXCJcclxuICAgICAgICAgICAgOiBkaXJlY3Rpb24gPT09IFwiZG93blwiXHJcbiAgICAgICAgICAgICAgICA/IFwicm90YXRlKC05MGRlZylcIlxyXG4gICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcclxuICAgIH0pLCBbZGlyZWN0aW9uXSk7XHJcbiAgICAvLyBSZW5kZXIge211bHRpcGxpZXJ9IG51bWJlciBvZiBjaGlsZHJlblxyXG4gICAgY29uc3QgbXVsdGlwbHlDaGlsZHJlbiA9IFJlYWN0LnVzZUNhbGxiYWNrKChtdWx0aXBsaWVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uQXJyYXkoTnVtYmVyLmlzRmluaXRlKG11bHRpcGxpZXIpICYmIG11bHRpcGxpZXIgPj0gMCA/IG11bHRpcGxpZXIgOiAwKSxcclxuICAgICAgICBdLm1hcCgoXywgaSkgPT4gKFJlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgeyBrZXk6IGkgfSwgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogY2hpbGRTdHlsZSwgY2xhc3NOYW1lOiBcInJmbS1jaGlsZFwiIH0sIGNoaWxkKSk7XHJcbiAgICAgICAgfSkpKSk7XHJcbiAgICB9LCBbY2hpbGRTdHlsZSwgY2hpbGRyZW5dKTtcclxuICAgIHJldHVybiAhaXNNb3VudGVkID8gbnVsbCA6IChSZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IGNvbnRhaW5lclJlZiwgc3R5bGU6IGNvbnRhaW5lclN0eWxlLCBjbGFzc05hbWU6IFwicmZtLW1hcnF1ZWUtY29udGFpbmVyIFwiICsgY2xhc3NOYW1lIH0sXHJcbiAgICAgICAgZ3JhZGllbnQgJiYgUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IGdyYWRpZW50U3R5bGUsIGNsYXNzTmFtZTogXCJyZm0tb3ZlcmxheVwiIH0pLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyZm0tbWFycXVlZVwiLCBzdHlsZTogbWFycXVlZVN0eWxlLCBvbkFuaW1hdGlvbkl0ZXJhdGlvbjogb25DeWNsZUNvbXBsZXRlLCBvbkFuaW1hdGlvbkVuZDogb25GaW5pc2ggfSxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJmbS1pbml0aWFsLWNoaWxkLWNvbnRhaW5lclwiLCByZWY6IG1hcnF1ZWVSZWYgfSwgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IGNoaWxkU3R5bGUsIGNsYXNzTmFtZTogXCJyZm0tY2hpbGRcIiB9LCBjaGlsZCkpO1xyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIG11bHRpcGx5Q2hpbGRyZW4obXVsdGlwbGllciAtIDEpKSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmZtLW1hcnF1ZWVcIiwgc3R5bGU6IG1hcnF1ZWVTdHlsZSB9LCBtdWx0aXBseUNoaWxkcmVuKG11bHRpcGxpZXIpKSkpO1xyXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWFycXVlZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbIl9fXyRpbnNlcnRTdHlsZSIsImNzcyIsInN0eWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJSZWFjdCIsInJlcXVpcmUiLCJfaW50ZXJvcERlZmF1bHRMZWdhY3kiLCJlIiwiUmVhY3RfX2RlZmF1bHQiLCJNYXJxdWVlIiwiZm9yd2FyZFJlZiIsImNsYXNzTmFtZSIsImF1dG9GaWxsIiwicGxheSIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25DbGljayIsImRpcmVjdGlvbiIsInNwZWVkIiwiZGVsYXkiLCJsb29wIiwiZ3JhZGllbnQiLCJncmFkaWVudENvbG9yIiwiZ3JhZGllbnRXaWR0aCIsIm9uRmluaXNoIiwib25DeWNsZUNvbXBsZXRlIiwib25Nb3VudCIsImNoaWxkcmVuIiwicmVmIiwiY29udGFpbmVyV2lkdGgiLCJzZXRDb250YWluZXJXaWR0aCIsInVzZVN0YXRlIiwibWFycXVlZVdpZHRoIiwic2V0TWFycXVlZVdpZHRoIiwibXVsdGlwbGllciIsInNldE11bHRpcGxpZXIiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJyb290UmVmIiwidXNlUmVmIiwiY29udGFpbmVyUmVmIiwibWFycXVlZVJlZiIsImNhbGN1bGF0ZVdpZHRoIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcnF1ZWVSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJNYXRoIiwiY2VpbCIsInVzZUVmZmVjdCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImR1cmF0aW9uIiwidXNlTWVtbyIsImNvbnRhaW5lclN0eWxlIiwiYXNzaWduIiwiZ3JhZGllbnRTdHlsZSIsIm1hcnF1ZWVTdHlsZSIsImNoaWxkU3R5bGUiLCJtdWx0aXBseUNoaWxkcmVuIiwiQXJyYXkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIm1hcCIsIl8iLCJpIiwiRnJhZ21lbnQiLCJrZXkiLCJDaGlsZHJlbiIsImNoaWxkIiwib25BbmltYXRpb25JdGVyYXRpb24iLCJvbkFuaW1hdGlvbkVuZCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-fast-marquee/dist/index.js\n");

/***/ })

};
;