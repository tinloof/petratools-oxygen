// @ts-ignore
// Virtual entry point for the app

/**
 * Export a fetch handler in module format.
 */
export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    return Response.redirect('https://petratools.com/', 301);
  },
};
