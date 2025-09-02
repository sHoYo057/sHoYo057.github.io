export default function Projects() {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      desc: 'Telecom churn modeling with feature engineering and XGBoost ensemble.',
      tags: ['Python', 'XGBoost', 'Feature Engineering'],
      link: 'https://www.kaggle.com/code/zorornoa/churn-analysis',
      image: '/images/churn.png',
    },
    {
      title: 'Walmart Store Sales Forecasting',
      desc: 'Time-series forecasting with holiday & weather features to improve store-level predictions.',
      tags: ['Time Series', 'Forecasting', 'Pandas'],
      link: 'https://www.kaggle.com/code/zorornoa/walmart-store-sales-forcasting',
      image: '/images/walmart.png',
    },
    {
      title: 'Mental Health Analysis App',
      desc: 'Analysis and visualization of mental health survey data with interactive dashboard.',
      tags: ['Flask', 'Pandas', 'Visualization'],
      link: 'https://github.com/sHoYo057/Mental_health',
      image: '/images/mental.png',
    },
  ]

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group relative"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover group-hover:opacity-80 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-brand text-white px-3 py-1 rounded"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
