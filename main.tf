# main.tf

# provider information
terraform {
	required_providers {
		digitalocean = {
			source  = "digitalocean/digitalocean"
			version = "2.26.0"
		}
	}
	required_version = ">=1.3.7"
}

variable "JACLYN_RAE_YOGA_DO_TOKEN" {
	type = string
}

variable "MAILCHIMP_API_KEY" {
	type = string
}

variable "MAILCHIMP_SERVER_PREFIX" {
	type = string
}

variable "MAILCHIMP_LIST_ID" {
	type = string
}

provider "digitalocean" {
	token = var.JACLYN_RAE_YOGA_DO_TOKEN
}

# resources 
resource "digitalocean_app" "jaclyn_rae_yoga_site" {
	spec {
		name   = "jaclyn-rae-yoga"
		domain {
			name = "jaclynraeyoga.rosstechnologysolutions.com"
			zone = "RTS"
		}
		region = "nyc"
		env {
			key = "MAILCHIMP_API_KEY"
			value = var.MAILCHIMP_API_KEY
			scope = "RUN_AND_BUILD_TIME"
			type = "SECRET"
		}
		env {
			key = "MAILCHIMP_SERVER_PREFIX"
			value = var.MAILCHIMP_SERVER_PREFIX
			scope = "RUN_AND_BUILD_TIME"
			type = "SECRET"
		}
		env {
			key = "MAILCHIMP_LIST_ID"
			value = var.MAILCHIMP_LIST_ID
			scope = "RUN_AND_BUILD_TIME"
			type = "SECRET"
		}

		static_site {
			name          = "jaclyn-rae-yoga"
			build_command = "npm run export"

			routes {
				path = "/"
			}

			github {
				repo = "rosstechnologysolutions/jaclynraeyoga"
				branch         = "main"
				deploy_on_push = true
			}
		}
	}
}