import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMachinelearningexperimentationMachinelearningexperimentation implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Machinelearningexperimentation Machinelearningexperimentation',
                name: 'N8nDevAzureMachinelearningexperimentationMachinelearningexperimentation',
                icon: { light: 'file:./azure-machinelearningexperimentation-machinelearningexperimentation.png', dark: 'file:./azure-machinelearningexperimentation-machinelearningexperimentation.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'APIs for CRUD operations on Azure Machine Learning Team Account resources.',
                defaults: { name: 'Azure Machinelearningexperimentation Machinelearningexperimentation' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMachinelearningexperimentationMachinelearningexperimentationApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
