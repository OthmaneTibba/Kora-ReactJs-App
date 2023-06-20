# REACT JS KORA APP

The React.js application is a dynamic and interactive web application that utilizes the ASP.NET framework to request and retrieve live soccer data.

## How the app works

- The ASP.NET app includes a time-based caching mechanism to optimize data retrieval for the React.js application. When a new request is received, the ASP.NET app verifies if the time elapsed since the last request is less than 1 minute. If this condition is true, it retrieves the data from Redis, a high-performance in-memory data store, and returns it without making further external requests.

- However, if the elapsed time is greater than 1 minute, indicating that the data in Redis may be outdated, the ASP.NET app performs web scraping or fetches the data from the original source. It then updates the data in Redis to reflect the latest information and caches it. Finally, the ASP.NET app returns the fresh data to the React.js application.

- This caching strategy ensures that frequently accessed data is readily available from Redis, minimizing the need for expensive external requests and enhancing the overall performance of the application. By leveraging Redis as a cache, the ASP.NET app reduces the response time and improves the scalability of the system, providing users with near-real-time soccer data while reducing the load on the original data source.

- The Docker container running the ASP.NET app contains all the necessary components, including the ASP.NET framework, web server, and any dependencies required to interact with Redis and fetch live soccer data. The container ensures that the app runs consistently across different environments and can be easily deployed to different VPS instances or cloud platforms.

![alt text](https://imgtr.ee/images/2023/06/20/ZmRlB.png)
