
## To Start the project - `npm start`
Open [http://localhost:3000]

## To run test cases `npm test`

## Functionalities and Architecture decisions
  - Add, Edit, Delete and Complets a Todo using 'typescript'
        - Used `useMemo` to memorize any update in the `todo list`
        - Used `useCallback` to memorize `function calls`
        - Used `React.memo` to memorize `'TodoItem' component` so it will not re-render unnessesary
        - Also Can use `Debounce` to search todo
        - Used `(aria-*) attributes` for screen readers
        - Used `semantic HTML` elements

  - Used `LocalStorage` to persist tasks between page reloads

  - Used `react-router-dom` to implement `Router` for All, completed and Pending todos

  - Used `Lazy-loading` for efficient `code-splitting` and `reduced bundle size`

  - Used `contest API` to implement `Theme(Dark/light)`

  - Used `Jest` and `react-testing` library to implement unit test cases

  - Implement `ErrorBoundary` to catch errors and show `fallback UI`

  - Added `index.css` file for all styling in app

  ## Web Vitals Monitoring

  - Added `Web Vitals Monitoring` console.log for CLS, FID, LCP
        - Web Vitals are a set of metrics (like LCP, FID, CLS) that measure real-world user experience (loading,           interactivity, visual stability).
        - `LCP` (Largest Contentful Paint) → `Loading performance` (Good: ≤ 2.5s)
        - `FID` (First Input Delay) → `Interactivity` (Good: ≤ 100ms)
        - `CLS` (Cumulative Layout Shift) → `Visual stability`

        examples (console.log value)
           {
                "name": "LCP",
                "value": 104,
                "delta": 104,
                "entries": [
                    {
                        "name": "",
                        "entryType": "largest-contentful-paint",
                        "startTime": 104,
                        "duration": 0,
                        "size": 3420,
                        "renderTime": 104,
                        "loadTime": 0,
                        "id": "",
                        "url": ""
                    }
                ],
                "id": "v2-1758105544883-3605860271399"
            }

