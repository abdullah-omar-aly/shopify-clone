import Link from 'next/link'
import React from 'react'
import prisma from '@/db'

export const dynamic = 'force-dynamic'

async function ProductsPage() {
    const products = await prisma.product.findMany()
    console.log(products)
  return (
    <div>
        ProductsPage
        <Link href='/admin/products/new' className='max-sm:bg-[green]'>new Product</Link>

        <hr />
        <ul>
            {
                // JSON.stringify(products)
                products.map(product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                ))

            }
        </ul>

    </div>
  )
}

export default ProductsPage