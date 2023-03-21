// inspired by DO's presigned URL function example - https://github.com/digitalocean/sample-functions-golang-presigned-url/blob/main/packages/presign/url/url.go

package main

import (
	"fmt"
	"net/http"
)

// Request type is the exected structure of a newsletter sign up
type Request struct {
	// firstname is the optional firstname of the user signing up to a newsletter list
	Firstname string `json:"firstname,omitempty"`
	// lastname is the optional lastname of the user signing up to a newsletter list
	Lastname string `json:"lastname,omitempty"`
	// email is the required field needed to sign up to a newsletter list
	Email string `json:"email"`
}

// Response returns back the http code, type of data, and the presigned url to the user.
type Response struct {
	// StatusCode is the http code that will be returned back to the user.
	StatusCode int `json:"statusCode,omitempty"`
	// Headers is the information about the type of data being returned back.
	Headers map[string]string `json:"headers,omitempty"`
	// Body will contain the presigned url to upload or download files.
	Body string `json:"body,omitempty"`
}

func Main(req Request) (*Response, error) {

	fmt.Printf("request firstname: %s, lastname: %s, email: %s", req.Firstname, req.Lastname, req.Email)

	return &Response{
		StatusCode: http.StatusOK,
		Body:       "hello from the sign up function!",
	}, nil
}
