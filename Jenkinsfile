pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Images') {
            steps {
                script {
                    sh 'docker build -t 500318249166.dkr.ecr.ap-south-1.amazonaws.com/frontend/web-app:app .'
                }
            }
        }

        stage('Push Images to ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 500318249166.dkr.ecr.ap-south-1.amazonaws.com'
                    sh 'docker push 500318249166.dkr.ecr.ap-south-1.amazonaws.com/frontend/web-app:app'
                }
            }
        }

        stage('Deploy to EKS') {
            steps {
                script {
                    withKubeConfig(
                        caCertificate: '',
                        clusterName: '',
                        contextName: '',
                        credentialsId: 'kubeconfig',
                        namespace: '',
                        restrictKubeConfigAccess: false,
                        serverUrl: ''
                    ) {
                        sh "kubectl delete deployment frontend-deployment authservice-deployment admin-deployment event-deployment || true"
                        sh "kubectl apply -f deployment.yaml"
                    }
                }
            }
        }
    }
}
