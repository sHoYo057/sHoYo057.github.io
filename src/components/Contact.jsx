import { useState } from 'react'
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';


export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            {/* Email */}
            <p className="flex items-center gap-2">
                <MdEmail className="text-xl text-brand" />
                <a
                href="mailto:lamaarun2001@gmail.com"
                className="text-brand font-semibold"
                >
                Email
                </a>
            </p>

            {/* LinkedIn */}
            <p className="flex items-center gap-2">
                <FaLinkedin className="text-xl text-brand" />
                <a
                href="https://www.linkedin.com/in/lama-arun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-semibold"
                >
                LinkedIn
                </a>
            </p>

            {/* Kaggle */}
            <p className="flex items-center gap-2">
                <SiKaggle className="text-xl text-brand" />
                <a
                href="https://www.kaggle.com/zorornoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-semibold"
                >
                Kaggle
                </a>
            </p>

          </div>
        </div>
        <div>
          {submitted ? (
            <div className="p-4 bg-green-100 text-green-700 rounded">
              ✅ Thank you! Your message has been sent.
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={() => setSubmitted(true)}
              className="flex flex-col gap-3 bg-gray-50 dark:bg-gray-700 p-4 rounded"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="p-2 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="p-2 rounded"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="p-2 rounded"
              />
              <button
                type="submit"
                className="bg-brand text-white px-4 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
