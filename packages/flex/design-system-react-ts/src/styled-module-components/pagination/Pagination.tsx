import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { is } from 'flex-design-system-react-ts/services'
import { Icon, IconName } from '../icon'
import { PaginationProps, Pager } from './PaginationProps'

/**
 * Pagination Component
 * @param count {number} Number elements
 * @param defaultPage {number} Current default active page (default is 1)
 * @param pageSize {number} Element per page (default is 10)
 * @param onClick {Function} Return pagination object
 * * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 */
const Pagination = ({
  className,
  count,
  defaultPage = 1,
  pageSize = 10,
  onClick,
  ...others
}: PaginationProps): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(defaultPage)
  const [arrayPage] = useState<Array<number>>(Array.from(Array(count + 1).keys()))
  const [pager, setPager] = useState<Pager>({
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: pageSize,
    endPage: count,
    pages: arrayPage,
  })

  const classes = classNames('pagination', is('rounded'), is('centered'), className)

  useEffect(() => {
    // Calculate total pages
    const totalPages = Math.ceil(count / pageSize)

    let startPage = 1
    let endPage = 5

    if (totalPages <= 5) {
      // less than pageSize(default is 5) total pages so show all
      startPage = 1
      endPage = totalPages
    } else {
      // more than 3 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1
        endPage = 5
      } else if (currentPage + 3 >= totalPages) {
        startPage = totalPages - 4
        endPage = totalPages
      } else {
        startPage = currentPage - 2
        endPage = currentPage + 2
      }
    }

    // Create an array of pages
    const pages = [...Array(endPage + 1 - startPage).keys()].map((i) => startPage + i)

    // Set pager object
    setPager({
      currentPage,
      pageSize,
      totalPages,
      endPage,
      pages,
    })
  }, [currentPage, pageSize, count])

  useEffect(() => {
    if (onClick) {
      onClick(pager)
    }
  }, [pager, onClick])

  const totalCountPages = count / pageSize

  return (
    <nav className={classes} {...others}>
      <a
        className={classNames('pagination-previous')}
        onClick={() => {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
          }
        }}
      >
        <Icon name={IconName.UI_ARROW_LEFT_R} />
      </a>
      <ul className='pagination-list'>
        {!pager.pages.includes(1) && (
          <li>
            <span className='pagination-ellipsis'>…</span>
          </li>
        )}
        {pager.pages.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              className={classNames('pagination-link', currentPage === pageNumber && is('current'))}
              aria-label={`Aller à la page ${pageNumber}`}
              onClick={() => {
                setCurrentPage(pageNumber)
              }}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        {!pager.pages.includes(totalCountPages) && (
          <li>
            <span className='pagination-ellipsis'>…</span>
          </li>
        )}
      </ul>
      <a
        className={classNames('pagination-next')}
        onClick={() => {
          if (currentPage !== Math.max(pager.totalPages)) {
            setCurrentPage(currentPage + 1)
          }
        }}
      >
        <Icon name={IconName.UI_ARROW_RIGHT_R} />
      </a>
    </nav>
  )
}

export default Pagination
