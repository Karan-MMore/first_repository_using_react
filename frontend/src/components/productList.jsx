import React from 'react'

export default function productList(props) {
    console.log(props.product)
  return (
    <>
       <div className="col-span-4 lg:col-span-3">
       <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src="https://picsum.photos/id/101/800/600"
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              The easy way to go
            </h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
          <p>
            Experience the simple pleasures of a world with no cars, and only
            gentle walks through palm tree forests, and fallen coconuts. An
            island that’s home to extraordinary cliffs, swelling oceans, and
            mammoth manta rays.
          </p>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
       </div>
    </>
  )
}
