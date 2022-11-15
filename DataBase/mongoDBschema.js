

// Mongo Ket:Value Pairing for NoSQL Database

products = {
  id: {
    id: TEXT,
    name: TEXT,
    category: TEXT,
    slogan: TEXT,
    description: TEXT,
    default_price: TEXT,
    features = {
      product_id: [
        {
          feature: TEXT,
          value: TEXT,
        },
      ]
    }
  }
}






product_styles = {
  product_id: TEXT,
  results: {
    style_id: INT,
    name: TEXT,
    original_price: TEXT,
    sale_price: TEXT,
    default: BOOLEAN,
    photos: [
      {
        thumbnail: TEXT,
        url: TEXT
      },
      {
        thumbnail: TEXT,
        url: TEXT
      },
    ],
    skus: [
      {
        quanitity: INT,
        size: TEXT
      },
      {
        quanitity: INT,
        size: TEXT
      },
    ]
  }
}