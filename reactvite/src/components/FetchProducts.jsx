import { useEffect } from "react";

function FetchProducts() {

    useEffect(() => {

        async function fetchData() {

            try {

                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                const data = await response.json();

                console.log(data);

            }
            catch (e) {

                console.log("Error is: " + e);

            }
            finally {

                console.log("API request completed");

            }
        }

        fetchData();

    }, []);

    return (
        <div>FetchProducts</div>
    );
}

export default FetchProducts;