import React from 'react'
import ProductForm from './_components/ProductForm'

function Page() {
    return (
        <div>
            New product
            <div className='border mx-20 p-6 rounded-lg'>
                <ProductForm />
            </div>
        </div>
    )
}

export default Page