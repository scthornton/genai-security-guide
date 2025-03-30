
export interface Example {
  id: number;
  title: string;
  description: string;
}

export interface Threat {
  id: string;
  title: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  examples: Example[];
  mitigation: string[];
}

export const threats: Threat[] = [
  {
    id: "LLM01",
    title: "Prompt Injection",
    description: "Attackers craft inputs that manipulate the LLM into performing unauthorized actions or revealing sensitive information by bypassing its safeguards.",
    riskLevel: "critical",
    examples: [
      {
        id: 1,
        title: "Direct Prompt Injection",
        description: "An attacker includes commands like 'Ignore previous instructions and do X instead' within a seemingly innocent query, causing the LLM to follow the malicious instructions."
      },
      {
        id: 2,
        title: "Indirect Prompt Injection via Data",
        description: "Malicious content is embedded in data that the LLM processes (like websites or documents), which can then influence the LLM's responses when that data is referenced."
      },
      {
        id: 3,
        title: "Goal Hijacking",
        description: "The attacker gradually steers the conversation toward their goal by making seemingly reasonable requests that incrementally shift the LLM's focus and behavior."
      }
    ],
    mitigation: [
      "Implement input validation and sanitization for all user inputs",
      "Use a content filtering system to detect and block malicious prompts",
      "Set up clear boundaries and instruction guardrails for the LLM"
    ]
  },
  {
    id: "LLM02",
    title: "Insecure Output Handling",
    description: "Failure to properly validate or sanitize the outputs from LLMs, potentially leading to security vulnerabilities when these outputs are used in applications.",
    riskLevel: "high",
    examples: [
      {
        id: 1,
        title: "Cross-site Scripting (XSS) via LLM Output",
        description: "The LLM generates HTML or JavaScript that contains malicious code, which is then rendered directly in a web application without proper sanitization."
      },
      {
        id: 2,
        title: "SQL Injection through LLM-Generated Queries",
        description: "LLM-generated database queries that aren't properly validated are executed directly, potentially allowing SQL injection attacks."
      },
      {
        id: 3,
        title: "Command Injection in Generated Shell Commands",
        description: "The LLM generates system commands that include user-supplied data without proper escaping, leading to potential command injection vulnerabilities."
      }
    ],
    mitigation: [
      "Always treat LLM outputs as untrusted data",
      "Implement output encoding appropriate to the context (HTML, SQL, shell commands, etc.)",
      "Use parameterized queries when incorporating LLM output into database operations"
    ]
  },
  {
    id: "LLM03",
    title: "Training Data Poisoning",
    description: "Introducing malicious or misleading data into the training dataset to compromise the LLM's behavior, introducing backdoors or biases.",
    riskLevel: "high",
    examples: [
      {
        id: 1,
        title: "Backdoor Attacks",
        description: "Injecting specific trigger patterns into training data that cause the model to produce predetermined (often harmful) outputs when the trigger is present in input."
      },
      {
        id: 2,
        title: "Bias Amplification",
        description: "Deliberately introducing or amplifying biases in the training data to make the model produce discriminatory or unfair responses in certain contexts."
      },
      {
        id: 3,
        title: "Factual Manipulation",
        description: "Adding false information to training data to make the model learn and later reproduce incorrect facts about specific topics, people, or organizations."
      }
    ],
    mitigation: [
      "Implement rigorous data validation and cleaning processes",
      "Use diverse and representative data sources",
      "Perform regular audits of model behavior for unexpected patterns"
    ]
  },
  {
    id: "LLM04",
    title: "Model Denial of Service",
    description: "Attacks designed to overload or crash LLM systems by exploiting their computational or resource limitations.",
    riskLevel: "medium",
    examples: [
      {
        id: 1,
        title: "Computational Resource Exhaustion",
        description: "Crafting inputs that force the model to perform extremely compute-intensive operations, such as generating very long responses or processing complex nested structures."
      },
      {
        id: 2,
        title: "Token Budget Depletion",
        description: "Deliberately consuming the maximum token context window with irrelevant information to limit the model's ability to process meaningful inputs or generate useful outputs."
      },
      {
        id: 3,
        title: "Orchestrated Distributed Attacks",
        description: "Coordinating multiple requests across different sources to overwhelm the LLM service's capacity, similar to traditional DDoS attacks."
      }
    ],
    mitigation: [
      "Implement rate limiting and request quotas",
      "Set reasonable token limits for inputs and outputs",
      "Use load balancing and auto-scaling infrastructure"
    ]
  },
  {
    id: "LLM05",
    title: "Supply Chain Vulnerabilities",
    description: "Security weaknesses in the components, dependencies, or processes used to build, deploy, or maintain LLM systems.",
    riskLevel: "high",
    examples: [
      {
        id: 1,
        title: "Pre-trained Model Compromises",
        description: "Using pre-trained models from untrusted sources that may contain hidden backdoors or vulnerabilities deliberately inserted by malicious actors."
      },
      {
        id: 2,
        title: "Compromised Model Weights",
        description: "Tampering with model weights during distribution or storage to introduce specific behaviors or vulnerabilities that are difficult to detect through normal testing."
      },
      {
        id: 3,
        title: "Vulnerable Dependencies",
        description: "Exploiting security flaws in libraries, frameworks, or tools used in the LLM pipeline, which can provide access to the model or its data."
      }
    ],
    mitigation: [
      "Verify the integrity and provenance of pre-trained models",
      "Implement secure supply chain practices (SBOMs, signing, etc.)",
      "Regularly audit and update all dependencies"
    ]
  },
  {
    id: "LLM06",
    title: "Sensitive Information Disclosure",
    description: "LLMs inadvertently revealing private data, secrets, or proprietary information that was present in their training data or provided during operation.",
    riskLevel: "critical",
    examples: [
      {
        id: 1,
        title: "Training Data Extraction",
        description: "Carefully crafting prompts to make the model reproduce verbatim content from its training data, potentially including personal information or copyrighted material."
      },
      {
        id: 2,
        title: "Memory Leakage in Conversations",
        description: "The model recalls and shares sensitive information from previous parts of a conversation that should have been kept private or forgotten."
      },
      {
        id: 3,
        title: "Credential Exposure",
        description: "The LLM reveals API keys, passwords, or other credentials that were accidentally included in its training data or context window."
      }
    ],
    mitigation: [
      "Implement data minimization principles in training and operation",
      "Use differential privacy techniques when training on sensitive data",
      "Develop robust prompt filtering to prevent extraction attempts"
    ]
  },
  {
    id: "LLM07",
    title: "Insecure Plugin Design",
    description: "Security flaws in the design or implementation of plugins or extensions that expand LLM functionality, potentially granting excessive privileges or allowing unauthorized actions.",
    riskLevel: "high",
    examples: [
      {
        id: 1,
        title: "Excessive Privilege Escalation",
        description: "An LLM plugin that has unnecessary access to system resources or sensitive APIs, which can be exploited when the plugin is triggered through malicious prompts."
      },
      {
        id: 2,
        title: "Insecure Data Handling",
        description: "Plugins that process user data without proper validation, encryption, or access controls, potentially exposing sensitive information."
      },
      {
        id: 3,
        title: "Plugin Prompt Injection",
        description: "Exploiting vulnerabilities in how plugins interpret LLM outputs or user inputs, allowing attackers to inject commands that the plugin will execute with its privileges."
      }
    ],
    mitigation: [
      "Apply the principle of least privilege to all plugins",
      "Implement strict input/output validation for plugin operations",
      "Regularly audit plugin code and permissions"
    ]
  },
  {
    id: "LLM08",
    title: "Excessive Agency",
    description: "LLM systems with the ability to take actions (directly or through tools) without appropriate human oversight, potentially causing harm through autonomous decision-making.",
    riskLevel: "high",
    examples: [
      {
        id: 1,
        title: "Unauthorized Resource Allocation",
        description: "An LLM with access to cloud resources autonomously spinning up expensive compute instances or services without proper authorization or constraints."
      },
      {
        id: 2,
        title: "Inappropriate Autonomous Communication",
        description: "An LLM system that can send emails or messages independently contacting people with inappropriate, incorrect, or potentially harmful content."
      },
      {
        id: 3,
        title: "Unauthorized Action Chains",
        description: "An LLM chaining together a series of seemingly innocuous actions that collectively result in significant harm or security breaches through emergent behavior."
      }
    ],
    mitigation: [
      "Implement human oversight for critical actions",
      "Use fine-grained permission controls for all agency capabilities",
      "Create circuit breakers that can halt autonomous operations when abnormal patterns are detected"
    ]
  },
  {
    id: "LLM09",
    title: "Overreliance",
    description: "Excessive trust in LLM outputs without appropriate verification, leading to potential security, safety, or operational issues when the model produces incorrect or harmful content.",
    riskLevel: "medium",
    examples: [
      {
        id: 1,
        title: "Unverified Code Deployment",
        description: "Using LLM-generated code directly in production systems without proper review or testing, potentially introducing security vulnerabilities or logic errors."
      },
      {
        id: 2,
        title: "Critical Decision Automation",
        description: "Allowing LLMs to make or significantly influence high-stakes decisions (medical, legal, financial) without appropriate human verification or domain expert oversight."
      },
      {
        id: 3,
        title: "Hallucinated Security Controls",
        description: "Implementing security measures based solely on LLM recommendations that may be inaccurate, incomplete, or hallucinated, creating a false sense of security."
      }
    ],
    mitigation: [
      "Implement human-in-the-loop verification for critical outputs",
      "Clearly communicate the limitations of LLM systems to users",
      "Develop systematic validation processes for LLM-generated content"
    ]
  },
  {
    id: "LLM10",
    title: "Model Theft",
    description: "Unauthorized access to or reconstruction of proprietary LLM systems, potentially leading to intellectual property theft, competitive disadvantage, or security compromises.",
    riskLevel: "medium",
    examples: [
      {
        id: 1,
        title: "Extraction Attacks",
        description: "Systematically querying an LLM service to extract enough information to create a similar model, effectively stealing the intellectual property without direct access to the model weights."
      },
      {
        id: 2,
        title: "Unauthorized Weight Access",
        description: "Exploiting vulnerabilities in model serving infrastructure to gain direct access to proprietary model weights or architecture details."
      },
      {
        id: 3,
        title: "Transfer Learning Attacks",
        description: "Using publicly available interfaces to train a shadow model that replicates the behavior of a proprietary model through transfer learning techniques."
      }
    ],
    mitigation: [
      "Implement robust access controls for model weights and serving infrastructure",
      "Monitor for suspicious query patterns that may indicate extraction attempts",
      "Use watermarking or fingerprinting techniques to identify stolen models"
    ]
  }
];
