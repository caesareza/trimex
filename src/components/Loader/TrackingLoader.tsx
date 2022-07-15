import React from 'react'

const TrackingLoader = () => (
  <section id="tracking-order">
    <div className="p-5 container mx-auto">
      <div className="animate-pulse">
        <div className="w-1/2 mx-auto h-7 bg-slate-300 rounded mt-2"></div>
        <div className="flex my-7">
          <div className="bg-slate-300 h-10 w-10 mr-2"></div>
          <div className="bg-slate-300 h-10 w-36"></div>
        </div>

        <div className="flex space-x-1">
          <div className="bg-slate-300 h-28 w-full"></div>
          <div className="bg-slate-300 h-28 w-full"></div>
          <div className="bg-slate-300 h-28 w-full"></div>
          <div className="bg-slate-300 h-28 w-full"></div>
          <div className="bg-slate-300 h-28 w-full"></div>
        </div>

        <div className="flex-1 space-y-5 py-5">
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 bg-slate-300 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-300 rounded"></div>
          </div>
        </div>

        <div className="flex-1 space-y-5 py-5">
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 bg-slate-300 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrackingLoader
