pipeline {
    agent any
    environment { 
        googleChatNotificationUrl = 'https://chat.googleapis.com/v1/spaces/AAAAam5K4I8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=fp7DgbprwcGsLHgXggLmLfAim38AWkitkPXmSs1LdIQ%3D'
    }
    stages {
        stage('Yarn Install') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Test & Coverage') {
            steps {
                sh 'yarn run test'
            }
        }

        stage('Lint'){
            steps {
                sh 'yarn lint'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn run build'
            }
        }
    }
    post {
        success {
            googlechatnotification url: ${env.googleChatNotificationUrl}, message: '${JOB_NAME} is ${BUILD_STATUS} by ${CHANGE_AUTHOR} [ SUCCESS ]', sameThreadNotification: true
        }
            failure {
            googlechatnotification url: ${env.googleChatNotificationUrl}, message: '${JOB_NAME} is ${BUILD_STATUS} by ${CHANGE_AUTHOR} [ FAIL ] ', sameThreadNotification: true

        }

    }
}