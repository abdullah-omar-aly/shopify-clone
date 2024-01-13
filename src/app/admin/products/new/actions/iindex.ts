//@ts-nocheck
'use server'
import prisma from "@/db";

export async function createProduct(formData: FormData) {

    const newProduct = await prisma.product.create({
        data: {
            ...formData
        }
    })
    console.log('new product', newProduct)
    // return newProduct
}