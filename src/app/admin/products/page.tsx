import Link from 'next/link'
import React from 'react'

function ProductsPage() {
  return (
    <div>
        ProductsPage
        <Link href='/admin/products/new' className='max-sm:bg-[green]'>new Product</Link>
    </div>
  )
}

export default ProductsPage