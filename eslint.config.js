import { re_taro } from '@re-taro/configs/eslint';

export default re_taro(
	{
		typescript: {
			rules: {
				'ts/restrict-template-expressions': 'off',
			},
		},
	},
	{
		ignores: ['functions/*.ts', '.storybook/*.ts'],
	},
);
