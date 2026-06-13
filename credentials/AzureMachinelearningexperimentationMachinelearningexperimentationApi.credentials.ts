import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMachinelearningexperimentationMachinelearningexperimentationApi implements ICredentialType {
        name = 'N8nDevAzureMachinelearningexperimentationMachinelearningexperimentationApi';

        displayName = 'Azure Machinelearningexperimentation Machinelearningexperimentation API';

        icon: Icon = { light: 'file:../nodes/AzureMachinelearningexperimentationMachinelearningexperimentation/azure-machinelearningexperimentation-machinelearningexperimentation.png', dark: 'file:../nodes/AzureMachinelearningexperimentationMachinelearningexperimentation/azure-machinelearningexperimentation-machinelearningexperimentation.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Machinelearningexperimentation Machinelearningexperimentation API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
