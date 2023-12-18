package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	
	"goji.io"
	"goji.io/pat"
    "github.com/rs/cors"
)

func hello(w http.ResponseWriter, r *http.Request) {
	_, err := fmt.Fprintf(w, "Hello World, from Golang Goji")
	if err != nil {
		return
	}
}

func java(w http.ResponseWriter, r *http.Request) {
	requestURL := fmt.Sprintf("http://localhost:%d/hello", 1080)
	req, err := http.NewRequest(http.MethodGet, requestURL, nil)
	if err != nil {
		fmt.Printf("client: could not create request: %s\n", err)
		os.Exit(1)
	}
	
	res, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Printf("client: error making http request: %s\n", err)
		os.Exit(1)
	}
	
	fmt.Printf("client: got response!\n")
	fmt.Printf("client: status code: %d\n", res.StatusCode)
	
	resBody, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Printf("client: could not read response body: %s\n", err)
		os.Exit(1)
	}
	
	fmt.Printf("client: response body: %s\n", resBody)
	
	_, err = fmt.Fprintf(w, "Golang call: %s", string(resBody))
	if err != nil {
		return
	}
}

func main() {
	mux := goji.NewMux()
	mux.HandleFunc(pat.Get("/hello"), hello)
	mux.HandleFunc(pat.Get("/java"), java)
    
	handler := cors.Default().Handler(mux)
	
	err := http.ListenAndServe("localhost:1081", handler)
	if err != nil {
		return
	}
}
