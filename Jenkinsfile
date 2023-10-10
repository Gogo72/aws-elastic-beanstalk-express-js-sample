pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install --save'
            }
        }
        stage('Test external script') { 
            steps {
                sh './test.sh' 
            }
        }
       stage('Execute app for 30 sec') { 
            steps {
                sh 'node ./app3000.js'
            }
        }
    }
}
