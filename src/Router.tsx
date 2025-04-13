import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// Layouts
import ListLayout from '@/layouts/ListLayout'
const DetailLayout = lazy(() => import('@/layouts/DetailLayout'))
// Pages
const Home = lazy(() => import('@/views/Home'))
const List = lazy(() => import('@/views/List'))
const Detail = lazy(() => import('@/views/Detail'))
const SignIn = lazy(() => import('@/views/SignIn'))
const SignUp = lazy(() => import('@/views/SignUp'))

export default function Router() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        {/* Auth Pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ListLayout />}>
          {/* Home */}
          <Route
            path='/'
            element={<Home />}
          />

          {/* List Movie */}
          <Route
            path='/:type/:menu'
            element={<List />}
          />
        </Route>

        {/* Detail */}
        <Route element={<DetailLayout />}>
          <Route
            path='/:type/detail/:id'
            element={<Detail />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}
