import {test, expect} from '@playwright/test'
const getActiveImageSrc = async (page: import('@playwright/test').Page) =>
  page.locator('.carousel-item.active img').first().getAttribute('src')
const getIndexValue = async (page: import('@playwright/test').Page) => {
  const text = (await page.locator('.col').first().textContent()) ?? ''
  const matches = text.match(/(\d+)/g)
  return matches ? Number(matches[matches.length - 1]) : NaN
}
test('BCarousel controls move slides and sync v-model index', async ({page}) => {
  await page.goto('http://localhost:5174')
  await page.locator('.carousel').first().waitFor({state: 'visible'})
  await expect.poll(() => getActiveImageSrc(page)).toContain('?image=1')
  await expect.poll(() => getIndexValue(page)).toBe(0)
  await page.locator('.carousel-control-next').click()
  await expect.poll(() => getActiveImageSrc(page)).toContain('?image=2')
  await expect.poll(() => getIndexValue(page)).toBe(1)
  await page.locator('.carousel-control-next').click()
  await expect.poll(() => getActiveImageSrc(page)).toContain('?image=3')
  await expect.poll(() => getIndexValue(page)).toBe(2)
  await page.locator('.carousel-control-next').click()
  await expect.poll(() => getActiveImageSrc(page)).toContain('?image=1')
  await expect.poll(() => getIndexValue(page)).toBe(0)
  await page.locator('.carousel-control-prev').click()
  await expect.poll(() => getActiveImageSrc(page)).toContain('?image=3')
  await expect.poll(() => getIndexValue(page)).toBe(2)
})
