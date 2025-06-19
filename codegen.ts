import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'https://beta.pokeapi.co/graphql/v1beta',
	documents: ['./src/**/*.ts'],
	generates: {
		'./src/__generated__/': {
			preset: 'client',
			presetConfig: {
				gqlTagName: 'gql'
			}
		},
		'./src/__generated__/types.ts': {
			plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo']
		}
	}
};
export default config;
