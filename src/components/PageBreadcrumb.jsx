import { Breadcrumb } from 'antd'
import { Link, useLocation, useParams } from 'react-router-dom'
import Container from './layout/Container'
import { capitalizeFirstLetter } from './utils'

const PageBreadcrumb = () => {
  const location = useLocation()
  const { category, query } = useParams()
  let breadcrumbNameMap = {
    '/': 'Home',
    '/search': 'Search',
  }
  breadcrumbNameMap[`/search/${category}`] =
    category && capitalizeFirstLetter(category)
  // breadcrumbNameMap[`/search/${category}/${query}`] =
  //   query && capitalizeFirstLetter(query)

  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`

    return (
      <Breadcrumb.Item key={url}>
        <Link className='text-gray' to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    )
  })
  const breadcrumbItems = [
    <Breadcrumb.Item key='home'>
      <Link className='text-solid' to='/courses_institutes'>
        Home
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)

  return (
    <div className='p-2 px-10'>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  )
}

export default PageBreadcrumb
