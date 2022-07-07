import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'

const Contact = () => {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.34777322013!2d115.15423269089867!3d-8.672676918491954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Denpasar%20City%2C%20Bali!5e0!3m2!1sen!2sid!4v1657112429202!5m2!1sen!2sid"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3 py-5">
          <div className="bg-gray-100 p-5">
            <div className="flex items-center">
              <div className="bg-white rounded-full block p-3 mr-3">
                <AiOutlineMail size={30} />
              </div>
              <div>
                <h2 className="font-bold">Email Address</h2>
                <p className="text-gray-500">Sent email for more information</p>
              </div>
            </div>
            <div className="p-2">info@terimaexpress.com</div>
          </div>
          <div className="bg-gray-100 p-5">
            <div className="flex items-center">
              <div className="bg-white rounded-full block p-3 mr-3">
                <AiOutlinePhone size={30} />
              </div>
              <div>
                <h2 className="font-bold">Phone Number</h2>
                <p className="text-gray-500">Call for more information</p>
              </div>
            </div>
            <div className="p-2">+62 098-098-098-09</div>
          </div>
          <div className="bg-gray-100 p-5">
            <div className="flex items-center">
              <div className="bg-white rounded-full block p-3 mr-3">
                <GrLocation size={30} />
              </div>
              <div>
                <h2 className="font-bold">Office Address</h2>
                <p className="text-gray-500">Our office address</p>
              </div>
            </div>
            <div className="p-2">
              B2, Miranda City Tower <br />
              New York, US
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
