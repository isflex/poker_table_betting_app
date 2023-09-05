/**
 * Pricing Table Interface
 */
export interface PricingTableProps {
  children?: React.ReactNode | string
  special?: boolean
}

/**
 * Pricing Table Web Interface
 */
export interface PricingTableWebProps extends PricingTableProps {
  className?: string
}
