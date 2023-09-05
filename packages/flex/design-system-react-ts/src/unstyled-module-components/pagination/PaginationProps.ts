export interface Pager {
  currentPage: number
  pageSize: number
  totalPages: number
  endPage: number
  pages: number[]
}

/**
 * Pagination Interface
 */
export interface PaginationProps {
  count: number
  defaultPage?: number
  pageSize?: number
  onClick?: (pager: Pager) => void
  className?: string
}
