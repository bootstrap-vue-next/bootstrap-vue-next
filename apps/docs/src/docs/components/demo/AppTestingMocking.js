import {vi} from 'vitest'

vi.mock('bootstrap-vue-next', async () => {
  const actual = await vi.importActual('bootstrap-vue-next')
  return {
    ...actual,
    useToast: () => ({
      create: vi.fn(),
      show: vi.fn(),
    }),
  }
})
