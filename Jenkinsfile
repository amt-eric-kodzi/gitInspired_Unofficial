def appname = 'gitinspired'
def deploy_group = 'gitinspired-frontend-dev'
def deploy_group_prod = 'gitinspired-frontend-prod'
def s3_bucket = 'training-gitinspired-media'
def s3_filename = 'gitinspired-codedeploy-june-src'

//Slack Notification Integration
def gitName = env.GIT_BRANCH
def jobName = env.JOB_NAME
def branchName = env.BRANCH_NAME
def main_branch = ['staging', 'develop']

// Environments Declaration
environment {
  jobName = env.JOB_NAME
  branchName = env.BRANCH_NAME
}

// Successful Build
def buildSuccess = [
  [text: "Gitinspied Frontend Build Successful on ${branchName}",
  fallback: "Gitinspied Frontend Build Successful on ${branchName}",
  color: "#00FF00"
  ]
]

// Failed Build
def buildError = [
  [text: "Gitinspied Frontend Build Failed on ${branchName}",
  fallback: "Gitinspied Frontend Build Failed on ${branchName}",
  color: "#FF0000"
  ]
]

pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
        stage('Install Dependencies') {
            steps {
            sh 'yarn install'
            }
        }
        stage('Build') {
            when {
                anyOf {
                    branch 'staging';
                    branch 'develop'
                }
            }
            steps {
                sh 'yarn build'
            }
        }
     stage('Prepare to Deploy') {
         when {
             anyOf {
                 branch 'staging';
				 branch 'develop'
             }
         }

       steps {
         withAWS(region:'eu-west-1',credentials:'aws-cred') {
           script {
             def gitsha = sh(script: 'git log -n1 --format=format:"%H"', returnStdout: true)
             s3_filename = "${s3_filename}-${gitsha}"
             sh """
                 aws deploy push \
                 --application-name ${appname} \
                 --description "This is a revision for the ${appname}-${gitsha}" \
                 --ignore-hidden-files \
                 --s3-location s3://${s3_bucket}/${s3_filename}.zip \
                 --source .
               """
           }
         }
       }
     }
	 stage('Deploy to Development') {
         when {
             branch 'develop'
         }
       steps {
         withAWS(region:'eu-west-1',credentials:'aws-cred') {
           script {
             sh """
                 aws deploy create-deployment \
                 --application-name ${appname} \
                 --deployment-config-name CodeDeployDefault.OneAtATime \
                 --deployment-group-name ${deploy_group} \
                 --file-exists-behavior OVERWRITE \
                 --s3-location bucket=${s3_bucket},key=${s3_filename}.zip,bundleType=zip
               """
           }
         }
	   }
	 }
	stage('Deploy To Production') {
      when {
        branch 'staging'
      }
      steps {
        withAWS(region:'eu-west-1',credentials:'aws-cred') {
          script {
            sh """
                aws deploy create-deployment \
                --application-name ${appname} \
                --deployment-config-name CodeDeployDefault.OneAtATime \
                --deployment-group-name ${deploy_group_prod} \
                --file-exists-behavior OVERWRITE \
                --s3-location bucket=${s3_bucket},key=${s3_filename}.zip,bundleType=zip
              """
          }
        }
      }
    }

    stage('Clean WS') {
      steps {
        cleanWs()
      	}
   	}
 }
 post {
    always {
      echo 'One way or another, I have finished'
      cleanWs()
    }
    success {
      script {
        if (BRANCH_NAME in main_branch) {
            slackSend(channel:"gitinspired-capstone-june", attachments: buildSuccess)
          }
      }
      withAWS(region:'eu-west-1',credentials:'aws-cred') {
        sh 'aws ses send-email --from cloudamalitech@amalitech.org --to caleb.osam@amalitech.com --subject "Deployment passed" --text "Gitinspied Frontend Frontend Deployment passed"'
      		}
    }
    unstable {
      echo 'I am unstable :/'
    }
    failure {
    script {
      if (BRANCH_NAME in main_branch) {
          slackSend(channel:"gitinspired-capstone-june", attachments: buildError)
          }
    }
      withAWS(region:'eu-west-1',credentials:'aws-cred') {
        sh 'aws ses send-email --from cloudamalitech@amalitech.org --to caleb.osam@amalitech.com --subject "Deployment failed" --text "Gitinspied Frontend Frontend Deployment failed"'
      		}
    }
    changed {
      echo 'Things were different before...'
    	}
  }
}
