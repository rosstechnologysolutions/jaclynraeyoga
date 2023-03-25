# main.tf

############################
### provider information ###
############################

provider "digitalocean" {
  token = var.JACLYN_RAE_YOGA_DO_TOKEN
}

terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "2.26.0"
    }
  }
  required_version = ">=1.3.7"
}

#################
### variables ###
#################
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

#################
### resources ###
#################
resource "digitalocean_app" "jaclyn_rae_yoga_site" {
  spec {
    name = "jaclyn-rae-yoga"
    domain {
      name = "jaclynraeyoga.rosstechnologysolutions.com"
    }
    region = "nyc"
    static_site {
      name          = "jaclyn-rae-yoga"
      build_command = "npm run export"

      routes {
        path = "/"
      }
      github {
        repo           = "rosstechnologysolutions/jaclynraeyoga"
        branch         = "main"
        deploy_on_push = true
      }
    }

    function {
      name = "newsletter-sign-up"

      # TODO: CORS - https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs/resources/app#cors
      source_dir = "functions/newsletterSignUp"

      env {
        key   = "MAILCHIMP_API_KEY"
        value = var.MAILCHIMP_API_KEY
        scope = "RUN_AND_BUILD_TIME"
        type  = "SECRET"
      }
      env {
        key   = "MAILCHIMP_SERVER_PREFIX"
        value = var.MAILCHIMP_SERVER_PREFIX
        scope = "RUN_AND_BUILD_TIME"
        type  = "SECRET"
      }
      env {
        key   = "MAILCHIMP_LIST_ID"
        value = var.MAILCHIMP_LIST_ID
        scope = "RUN_AND_BUILD_TIME"
        type  = "SECRET"
      }

      github {
        repo           = "rosstechnologysolutions/jaclynraeyoga"
        branch         = "main"
        deploy_on_push = true
      }
      routes {
        path = "/newsletter-sign-up"
      }
    }
  }
}

# # create a dns CNAME to the app live url
# resource "digitalocean_record" "jaclyn_rae_yoga" {
#   domain = concat(split("//", "${digitalocean_app.jaclyn_rae_yoga_site.live_url}")[1], ".")
#   ttl    = "300"
#   type   = "CNAME"
#   name   = "jaclyn-rae-yoga"
#   value  = split("//", "${digitalocean_app.jaclyn_rae_yoga_site.default_ingress}")[1]
# }