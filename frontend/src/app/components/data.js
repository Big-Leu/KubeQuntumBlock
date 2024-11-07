import g1 from "../images/g1.svg"
import pod from "../images/pod.svg";
import svc from "../images/svc.svg";
import user from "../images/user.svg";
import vol from "../images/vol.svg";
import api from "../images/api.svg";
import ing from "../images/ing.svg";

export const cardsData = [
  {
    title: "List Pods",
    image: vol,
    para: "Retrieve a list of all running pods in the cluster. Filter results based on namespace, labels, or status to view specific sets of pods.",
    form: 0,
    api: "/getPods",
    method: "GET",
  },
  {
    title: "Create Pod",
    image: pod,
    para: "Provision a new pod in the cluster. Define specifications for containers, resources, and environment variables dynamically to meet deployment needs.",
    form: 1,
    api: "/createPod",
    method: "POST"

  },
  {
    title: "Delete Pod",
    image: svc,
    para: "Safely remove a pod from the cluster. Includes options for graceful termination or forceful deletion based on pod status and dependencies.",
    form: 2,
    api: "/deletepod",
    method: "DELETE"
  },
  {
    title: "Patch Pod",
    image: user,
    para: "Update specific fields of an existing pod without redeployment. Apply changes to configurations or labels to modify pod behavior in real-time.",
    form: 3,
    api: "/patchpod",
    method: "PATCH"
  },
  {
    title: "Pod Logs",
    image: ing,
    para: "Access logs of individual pods to monitor activity and troubleshoot issues. Choose container-specific logs within multi-container pods for detailed analysis.",
    form: 2,
    api: "/getLogs",
    method: "PATCH"
  },
  {
    title: "Save the Endpoints",
    image: api,
    para: "Run commands inside a specific pod container for debugging and maintenance. Provides real-time access to manage or inspect pod-level operations.",
    form: 4,
    api: "/addEndpoint",
    method: "POST"
  },
];
export const FunctionData = [
 {
    title: "Test the Endpoint Command",
    image: g1,
    para: "Run commands inside a specific pod container to test the endpoints. This allows real-time validation and inspection of the application's behavior and performance at the pod level.",
    form: 4,
    api: "/addEndpoint",
    method: "POST"
  }
];

  export const api1 = [
    {

    },
    {
      podname: "my-pod",
      containername: "nginx-container",
      image: "nginx:latest"
    },
    {
      podname: "my-pod"
    },
    {
      podname: "my-pod",
      podimage: "nginx:1.25.4"
    },
    {
      podname: "flask-backend-6cbb9fc588-ss8x7",
      containername: "flask-backend-deployment",
      endpoint: "get",
      functionname: "list_user",
      route: "/getusers",
      functionbody: "try:\\n    users = self.session.query(UserSignUP).all()\\n    if not users:\\n        return {\"message\": \"No users found\"}, 404\\n    return [user.to_dict() for user in users]\\nexcept Exception as exception:\\n    return {\"message\": f\"Error retrieving users: {str(exception)}\"}"
  },    
  ];

 export const podsData = [
    {
      name: "flask-backend-6cbb9fc588-ss8x7",
      containers: [
        { name: "flask-backend-deployment", image: "bigeu007/backend:v5" }
      ],
      status: "Running",
    },
    {
      name: "node-frontend-ccb46898-cbm2g",
      containers: [
        { name: "node-frontend-deployment", image: "bigleu007/frontend:v2" }
      ],
      status: "Running",
    }
  ];