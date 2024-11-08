
import AddToBag from "@/app/components/AddToBag";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id, 
    images, 
    price, 
    name, 
    description, 
    "slug": slug.current,
    "categoryName": category->name
  }`;
  
  const data = await client.fetch(query, { slug });
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  // Await the params slug
  const { slug } = await params;

  const data: fullProduct = await getData(slug);

  return (
    <div className="bg-white animate-fadeIn">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">{data.categoryName}</span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
            </div>
            <div className="flex items-center mb-6 md:mb-10 gap-3 ">
              <Button className="rounded-full gap-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5"/>
              </Button>
              <span className="text-sm text-gray-600 transition duration-100">56 ratings</span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">${data.price}</span>
              <span className="mb-0.5 font-bold text-red-800  line-through">${data.price+30}</span>
              </div>
              <span className="text-sm text-gray-500">Inclusive of Vat+shipping</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <Truck/>
                <span className="text-sm">2-4 days shipping</span>
              </div>
              <div className="flex gap-2.5 ">
                <AddToBag 
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                />
                <Button variant={"secondary"}>Checkout Now!</Button>
              </div>
              <p className="mt-12 text-base text-gray-500 tracking-wide">{data.description}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
